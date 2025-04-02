import LinkInBioIcon from '../icons/LinksInBioIcon';
import StoreIcon from '../icons/StoreIcon';
import MediaKitIcon from '../icons/MediaKitIcon';
import InvoicingIcon from '../icons/InvoicingIcon';
import BookingsIcon from '../icons/BookingsIcon';
import { SubItem } from '../types';

interface DropdownMenuProps {
  subItems: SubItem[];
  extraLabel?: string;
}

const iconMap: Record<string, React.ElementType> = {
  'Link in Bio': LinkInBioIcon,
  Store: StoreIcon,
  'Media Kit': MediaKitIcon,
  Invoicing: InvoicingIcon,
  Bookings: BookingsIcon,
};

export default function DropdownMenu({ subItems }: DropdownMenuProps) {
  return (
    <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-4 w-64 z-50">
      {subItems.map(subItem => {
        const IconComponent = iconMap[subItem.label];
        return (
          <div
            key={subItem.id}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {IconComponent && <IconComponent className="w-6 h-6" isColored />}
              <div>
                <p className="font-medium text-gray-900">{subItem.label}</p>
                <p className="text-sm text-gray-500">{subItem.description}</p>
              </div>
            </div>
            <span className="text-gray-400 text-lg">›</span>
          </div>
        );
      })}
    </div>
  );
}
