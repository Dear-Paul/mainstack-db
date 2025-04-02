import { useState } from 'react';
import { SubItem } from '../types';
import Tooltip from './Tooltip';
import LinkInBioIcon from '../icons/LinksInBioIcon';
import StoreIcon from '../icons/StoreIcon';
import MediaKitIcon from '../icons/MediaKitIcon';
import InvoicingIcon from '../icons/InvoicingIcon';
import BookingsIcon from '../icons/BookingsIcon';

interface AppBarProps {
  subItems: SubItem[];
  activeSubItemId?: number;
  setActiveSubItemId: (id: number) => void;
}

const iconMap: Record<string, React.ElementType> = {
  'Link in Bio': LinkInBioIcon,
  Store: StoreIcon,
  'Media Kit': MediaKitIcon,
  Invoicing: InvoicingIcon,
  Bookings: BookingsIcon,
};

export default function AppBar({
  subItems,
  activeSubItemId,
  setActiveSubItemId,
}: AppBarProps) {
  const [hoveredSubItemId, setHoveredSubItemId] = useState<number | null>(null);

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-2xl shadow-lg p-2 flex flex-col gap-2 z-30">
      {subItems.map(subItem => {
        const IconComponent = iconMap[subItem.label];
        const isActive = subItem.id === activeSubItemId;
        const isHovered = subItem.id === hoveredSubItemId;

        return (
          <Tooltip
            key={subItem.id}
            content={subItem.description}
            position="right"
          >
            <button
              onClick={() => setActiveSubItemId(subItem.id)}
              onMouseEnter={() => setHoveredSubItemId(subItem.id)}
              onMouseLeave={() => setHoveredSubItemId(null)}
              className={`p-2 rounded-lg transition-all ${
                isActive ? 'bg-black' : isHovered ? 'bg-gray-100' : ''
              }`}
            >
              {IconComponent && (
                <IconComponent
                  className="w-6 h-6"
                  isColored={isActive || isHovered}
                />
              )}
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}
