import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/datepicker.css';
import useOnClickOutside from '../hooks/useOnClickOutside';
import FilterIcon from '../icons/FilterIcon'; // Import the FilterIcon component

interface CustomDatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export default function CustomDatePicker({
  value,
  onChange,
  placeholder = 'Select date',
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  );

  // Handle react-datepicker's onChange, which can pass Date | null
  const handleDateChange = (date: Date | null) => {
    if (date) {
      onChange(date);
      setIsOpen(false);
    }
  };

  // Close the date picker when clicking outside
  useOnClickOutside(datePickerRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={datePickerRef}>
      <div className="relative">
        <input
          type="text"
          value={
            value
              ? value.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
              : ''
          }
          placeholder={placeholder}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          className="w-full px-4 py-3.5 border border-gray-50 rounded-xl text-base bg-[#EFF1F6] cursor-pointer focus:outline-none"
        />
        <span
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <FilterIcon />
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-10">
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            inline
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            minDate={new Date('1900-01-01')}
            maxDate={new Date('2100-12-31')}
            className="border rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
