import React, { useState, useRef } from 'react';
import { NavItem } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import MainstackIcon from '../icons/MainstackIcon';
import BellIcon from '../icons/BellIcon';
import ChatIcon from '../icons/ChatIcon';
import MenuIcon from '../icons/MenuIcon';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useUser } from '../hooks/useUser';
import ErrorFallback from './ErrorFallback';
import DropdownMenu from './DropDownMenu';
import MenuDropdown from './MenuDropDown';
import FilterIcon from '../icons/FilterIcon';

interface NavbarProps {
  navItems: NavItem[];
  selectedItem: string | null;
  setSelectedItem: (label: string) => void;
}

export default function Navbar({
  navItems,
  selectedItem,
  setSelectedItem,
}: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<string, boolean>>(
    {}
  );
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const menuDropdownRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  );
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to labels for determining the active route
  const routeToLabelMap: Record<string, string> = {
    '/': 'Revenue',
    '/home': 'Home',
    '/analytics': 'Analytics',
    '/revenue': 'Revenue',
    '/crm': 'CRM',
    '/apps': 'Apps',
  };

  // Determine the active route based on the current path
  const activeRouteLabel = routeToLabelMap[location.pathname] || 'Revenue';

  // Update navItems to reflect the active route and icon color
  const updatedNavItems = navItems.map(item => {
    const isFocused =
      item.label === activeRouteLabel ||
      selectedItem === item.label ||
      (item.subItems && isDropdownOpen[item.label]);
    return {
      ...item,
      isActive: item.label === activeRouteLabel,
      icon: item.icon
        ? React.cloneElement(item.icon, {
            fill: isFocused ? '#FFFFFF' : '#56616B',
          })
        : undefined,
    };
  });

  // Use the useOnClickOutside hook to close dropdowns and remove focus
  useOnClickOutside(dropdownRef, () => {
    setIsDropdownOpen({});
    setSelectedItem(activeRouteLabel);
    setIsMenuDropdownOpen(false);
  });

  const toggleDropdown = (label: string) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleItemClick = (label: string, hasSubItems: boolean) => {
    setSelectedItem(label);
    if (hasSubItems) {
      toggleDropdown(label);
    } else {
      navigate(`/${label.toLowerCase()}`);
      setIsDropdownOpen({}); // Close all dropdowns when navigating
    }
  };

  // Fetch user data
  const { data: user, error: userError } = useUser();

  if (userError) {
    const errorMessage =
      userError instanceof Error
        ? userError.message
        : 'An unexpected error occurred.';
    return (
      <ErrorFallback
        error={
          errorMessage.includes('ERR_NETWORK')
            ? 'You are offline. Please check your internet connection and try again.'
            : errorMessage
        }
        onRetry={() => {
          window.location.reload();
        }}
      />
    );
  }
  return (
    <nav className="fixed flex justify-between mx-4 inset-x-0 items-center p-4 bg-white shadow-md rounded-[100px]">
      <div className="flex items-center">
        <MainstackIcon />
      </div>
      <div className="flex gap-4">
        {updatedNavItems?.map(item => {
          const isFocused =
            item.isActive ||
            selectedItem === item.label ||
            (item.subItems && isDropdownOpen[item.label]);
          return (
            <div
              key={item.label}
              className="relative"
              ref={item.subItems ? dropdownRef : null}
            >
              <button
                onClick={() => handleItemClick(item.label, !!item.subItems)}
                className={`px-4 py-2 flex items-center gap-2 rounded-full transition-colors ${
                  isFocused
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-1">
                  {item.icon}
                  {item.label}
                  {item.subItems &&
                    isDropdownOpen[item.label] &&
                    item.extraLabel && (
                      <span
                        className={`text-sm ml-2 flex items-center gap-1 ${isFocused ? 'text-white' : 'text-gray-500'}`}
                      >
                        {item.extraLabel}
                        <span className="text-xs font-light">
                          <FilterIcon isNavItem={true} fill="#FFFFFF" />
                        </span>
                      </span>
                    )}
                </span>
              </button>
              {item.subItems && isDropdownOpen[item.label] && (
                <DropdownMenu
                  subItems={item.subItems}
                  extraLabel={item.extraLabel}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <BellIcon />
        <ChatIcon />
        <div className="relative">
          <div ref={menuDropdownRef}>
            <div
              onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
              className="bg-[#EFF1F6] py-1 pl-2 rounded-[100px] flex items-center gap-2 pr-4"
              data-testid="menu-button"
            >
              <div className="h-8 w-8 bg-[#131316] text-[#F2F3F5] text-[12px] rounded-[100px] flex items-center justify-center">
                {`${user?.first_name} ${user?.last_name}`
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()}
              </div>
              <MenuIcon />
            </div>
            {isMenuDropdownOpen && (
              <MenuDropdown
                user={{
                  name: `${user?.first_name} ${user?.last_name}`,
                  email: user?.email,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
