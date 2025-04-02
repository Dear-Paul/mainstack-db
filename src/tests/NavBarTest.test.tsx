import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { NavItem } from '../types';
import { useUser } from '../hooks/useUser';
import '@testing-library/jest-dom';
import { within } from '@testing-library/react';

// Define types for mocked components
interface MemoryRouterProps {
  children: React.ReactNode;
}

interface ErrorFallbackProps {
  error: string;
  onRetry: () => void;
}

interface DropDownMenuProps {
  subItems: NavItem[];
  extraLabel?: string;
}

interface MenuDropDownProps {
  user: { name: string; email: string };
}

// Mock dependencies
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
  MemoryRouter: ({ children }: MemoryRouterProps) => children,
}));

jest.mock('../hooks/useUser');

jest.mock('../hooks/useOnClickOutside', () => {
  return jest.fn(() => {});
});

jest.mock('../icons/MainstackIcon', () => () => (
  <div data-testid="mainstack-icon">MainstackIcon</div>
));

jest.mock('../icons/BellIcon', () => () => (
  <div data-testid="bell-icon">BellIcon</div>
));

jest.mock('../icons/ChatIcon', () => () => (
  <div data-testid="chat-icon">ChatIcon</div>
));

jest.mock('../icons/MenuIcon', () => () => (
  <div data-testid="menu-icon">MenuIcon</div>
));

jest.mock('../icons/FilterIcon', () => () => (
  <div data-testid="filter-icon">FilterIcon</div>
));

jest.mock(
  '../components/ErrorFallback',
  () =>
    ({ error, onRetry }: ErrorFallbackProps) => (
      <div data-testid="error-fallback">
        Error: {error}
        <button onClick={onRetry}>Retry</button>
      </div>
    )
);

jest.mock(
  '../components/DropDownMenu',
  () =>
    ({ subItems, extraLabel }: DropDownMenuProps) => (
      <div data-testid="dropdown-menu">
        DropdownMenu: {extraLabel}
        {subItems.map(item => (
          <div key={item.id}>{item.label}</div>
        ))}
      </div>
    )
);

jest.mock('../components/MenuDropDown', () => ({ user }: MenuDropDownProps) => (
  <div data-testid="menu-dropdown">
    MenuDropdown: {user.name} ({user.email})
  </div>
));

// Sample navItems for testing
const mockNavItems: NavItem[] = [
  {
    label: 'Home',
    isActive: false,
    icon: <div data-testid="home-icon">HomeIcon</div>,
  },
  {
    label: 'Analytics',
    isActive: false,
    icon: <div data-testid="analytics-icon">AnalyticsIcon</div>,
  },
  {
    label: 'Apps',
    isActive: false,
    icon: <div data-testid="apps-icon">AppsIcon</div>,
    extraLabel: 'Link in Bio',
    subItems: [
      {
        id: 1,
        label: 'Link in Bio',
        description: 'Manage Link in Bio',
        iconColor: 'bg-purple-400',
      },
      {
        id: 2,
        label: 'Store',
        description: 'Manage Store',
        iconColor: 'bg-orange-400',
      },
    ],
  },
];

describe('Navbar Component', () => {
  const mockSetSelectedItem = jest.fn();
  const mockNavigate = jest.fn();
  const mockUseLocation = useLocation as unknown as jest.Mock;
  const mockUseUser = useUser as unknown as jest.Mock;
  const mockUseOnClickOutside = jest.requireMock(
    '../hooks/useOnClickOutside'
  ) as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseOnClickOutside.mockImplementation(() => {});
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    mockUseLocation.mockReturnValue({ pathname: '/home' });
    mockUseUser.mockReturnValue({
      data: { first_name: 'John', last_name: 'Doe', email: 'john@example.com' },
      error: null,
    });
  });

  test('renders Navbar with nav items', () => {
    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Home"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByTestId('mainstack-icon')).toBeInTheDocument();
    expect(screen.getByTestId('bell-icon')).toBeInTheDocument();
    expect(screen.getByTestId('chat-icon')).toBeInTheDocument();
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  test('highlights active navigation item', () => {
    render(
      <MemoryRouter initialEntries={['/analytics']}>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Analytics"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    const activeItem = screen.getByText('Analytics').closest('button');
    expect(activeItem).toHaveClass('bg-black text-white');
  });

  test('opens and closes dropdown on click for items with sub-items', async () => {
    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Apps"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    const appsButton = screen.getByText('Apps');
    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();

    await userEvent.click(appsButton);

    const dropdownMenu = screen.getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeInTheDocument();
    expect(
      within(dropdownMenu).getByText('DropdownMenu: Link in Bio')
    ).toBeInTheDocument();
    expect(within(dropdownMenu).getByText('Link in Bio')).toBeInTheDocument();
    expect(within(dropdownMenu).getByText('Store')).toBeInTheDocument();

    await userEvent.click(appsButton);
    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });

  test('handles navigation click for items without sub-items', async () => {
    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Home"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    const analyticsNav = screen.getByText('Analytics');
    await userEvent.click(analyticsNav);

    expect(mockSetSelectedItem).toHaveBeenCalledWith('Analytics');
    expect(mockNavigate).toHaveBeenCalledWith('/analytics');
  });

  test('opens and closes menu dropdown on click', async () => {
    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Home"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    const menuButton = screen.getByTestId('menu-button');
    expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

    expect(screen.getByTestId('menu-dropdown')).toBeInTheDocument();
    expect(
      screen.getByText('MenuDropdown: John Doe (john@example.com)')
    ).toBeInTheDocument();

    await userEvent.click(menuButton);
    expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument();
  });

  test('renders error fallback if user fetch fails with generic error', () => {
    mockUseUser.mockReturnValue({
      data: null,
      error: new Error('Failed to fetch user'),
    });

    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Home"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-fallback')).toBeInTheDocument();
    expect(screen.getByText('Error: Failed to fetch user')).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });

  test('renders error fallback if user fetch fails with network error', () => {
    mockUseUser.mockReturnValue({
      data: null,
      error: new Error('ERR_NETWORK'),
    });

    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Home"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-fallback')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Error: You are offline. Please check your internet connection and try again.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });

  test('closes both dropdown and menu dropdown when clicking outside', async () => {
    const mockCallback = jest.fn();
    mockUseOnClickOutside.mockImplementation(
      (_ref: unknown, callback: () => void) => {
        mockCallback.mockImplementation(callback);
      }
    );

    render(
      <MemoryRouter>
        <Navbar
          navItems={mockNavItems}
          selectedItem="Apps"
          setSelectedItem={mockSetSelectedItem}
        />
      </MemoryRouter>
    );

    // Open the dropdown (Apps)
    const appsButton = screen.getByText('Apps');
    await userEvent.click(appsButton);
    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    // Open the menu dropdown
    const menuButton = screen.getByTestId('menu-button');
    await userEvent.click(menuButton);
    expect(screen.getByTestId('menu-dropdown')).toBeInTheDocument();

    // Simulate clicking outside
    mockCallback();

    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
      expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument();
    });
  });
});
