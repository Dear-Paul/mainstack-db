import { useState } from 'react';
import Navbar from './Navbar';
import AppBar from './AppBar';
import { NavItem } from '../types';
import HomeIcon from '../icons/HomeIcon';
import AnalyticsIcon from '../icons/AnalyticsIcon';
import RevenueIcon from '../icons/RevenueIcon';
import CrmIcon from '../icons/CrmIcon';
import AppIcon from '../icons/AppIcon';

interface DashboardProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  const [selectedItem, setSelectedItem] = useState<string>('Revenue');
  const [activeSubItemId, setActiveSubItemId] = useState<number>();

  const navItems: NavItem[] = [
    {
      label: 'Home',
      isActive: false,
      icon: <HomeIcon fill={selectedItem === 'Home' ? '#FFFFFF' : '#56616B'} />,
    },
    {
      label: 'Analytics',
      isActive: false,
      icon: (
        <AnalyticsIcon
          fill={selectedItem === 'Analytics' ? '#FFFFFF' : '#56616B'}
        />
      ),
    },
    {
      label: 'Revenue',
      isActive: true,
      icon: (
        <RevenueIcon
          fill={selectedItem === 'Revenue' ? '#FFFFFF' : '#56616B'}
        />
      ),
    },
    {
      label: 'CRM',
      isActive: false,
      icon: <CrmIcon fill={selectedItem === 'CRM' ? '#FFFFFF' : '#56616B'} />,
    },
    {
      label: 'Apps',
      isActive: false,
      icon: <AppIcon fill={selectedItem === 'Apps' ? '#FFFFFF' : '#56616B'} />,
      extraLabel: 'Link in Bio',
      subItems: [
        {
          id: 51,
          label: 'Link in Bio',
          description: 'Manage your Link in Bio',
          iconColor: 'bg-gradient-to-r from-purple-400 to-pink-400',
        },
        {
          id: 52,
          label: 'Store',
          description: 'Manage your Store activities',
          iconColor: 'bg-gradient-to-r from-orange-400 to-yellow-400',
        },
        {
          id: 53,
          label: 'Media Kit',
          description: 'Manage your Media Kit',
          iconColor: 'bg-gradient-to-r from-green-400 to-teal-400',
        },
        {
          id: 54,
          label: 'Invoicing',
          description: 'Manage your Invoices',
          iconColor: 'bg-gradient-to-r from-pink-400 to-purple-400',
        },
        {
          id: 55,
          label: 'Bookings',
          description: 'Manage your Bookings',
          iconColor: 'bg-gradient-to-r from-blue-400 to-indigo-400',
        },
      ],
    },
  ];

  // Find the sub-items from the "Apps" nav item
  const appsNavItem = navItems.find(item => item.label === 'Apps');
  const subItems = appsNavItem?.subItems || [];

  return (
    <div className="min-h-screen font-sans">
      <Navbar
        navItems={navItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="sticky top-[72px] z-40 bg-white">
        <AppBar
          subItems={subItems}
          activeSubItemId={activeSubItemId}
          setActiveSubItemId={setActiveSubItemId}
        />
      </div>
      <div className="pt-[120px] p-6 ml-16">{children}</div>
    </div>
  );
}
