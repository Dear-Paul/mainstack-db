import { useState, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import FilterIcon from '../icons/FilterIcon';

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export default function MultiSelectDropdown({
  label,
  options,
  selectedOptions,
  onChange,
  placeholder = 'Select...',
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(item => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  // Use the useOnClickOutside hook to close the dropdown when clicking outside
  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div
          className="flex items-center justify-between h-14 px-4 py-3.5 border border-gray-50 rounded-xl bg-[#EFF1F6] cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="text-gray-500 truncate flex-1">
            {selectedOptions.length > 0
              ? selectedOptions.join(', ')
              : placeholder}
          </span>
          <span
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <FilterIcon />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
          {options.map(option => (
            <label
              key={option}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                className="mr-2 h-4 w-4 text-black border-gray-300 rounded focus:ring-0 accent-black"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
