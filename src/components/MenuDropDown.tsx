import SettingsIcon from '../icons/SettingsIcon';
import PurchaseHistoryIcon from '../icons/PurchaseHistoryIcon';
import ReferAndEarnIcon from '../icons/ReferAndEarnIcon';
import IntegrationsIcon from '../icons/IntegrationsIcon';
import ReportBugIcon from '../icons/ReportBugIcon';
import SwitchAccountIcon from '../icons/SwitchAccountIcon';
import SignOutIcon from '../icons/SignOutIcon';

interface MenuDropdownProps {
  user: { name: string; email: string | undefined };
}

const menuItems = [
  { label: 'Settings', icon: SettingsIcon },
  { label: 'Purchase History', icon: PurchaseHistoryIcon },
  { label: 'Refer and Earn', icon: ReferAndEarnIcon },
  { label: 'Integrations', icon: IntegrationsIcon },
  { label: 'Report Bug', icon: ReportBugIcon },
  { label: 'Switch Account', icon: SwitchAccountIcon },
  { label: 'Sign Out', icon: SignOutIcon },
];

export default function MenuDropdown({ user }: MenuDropdownProps) {
  return (
    <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-4 w-64 z-50">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 bg-[#131316] text-[#F2F3F5] text-[16px] rounded-full flex items-center justify-center">
          {user.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()}
        </div>
        <div>
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div
          key={item.label}
          className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-all cursor-pointer ${
            index === menuItems.length - 1
              ? 'border-t border-gray-200 mt-2 pt-4'
              : ''
          }`}
        >
          <item.icon className="w-5 h-5" />
          <p className="text-gray-900">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
