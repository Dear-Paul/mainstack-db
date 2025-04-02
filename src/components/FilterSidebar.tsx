import { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import MultiSelectDropdown from './MultiSelectDropDown';

interface FilterSidebarProps {
  onClose: () => void;
  onApply: () => void;
}

export default function FilterSidebar({ onApply }: FilterSidebarProps) {
  const [dateRange, setDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });
  const [selectedTransactionTypes, setSelectedTransactionTypes] = useState<
    string[]
  >([]);
  const [selectedTransactionStatuses, setSelectedTransactionStatuses] =
    useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('Last 7 days');

  const transactionTypes = [
    'Store Transactions',
    'Get Tipped',
    'Withdrawals',
    'Chargebacks',
    'Cash Advances',
  ];
  const transactionStatuses = ['Successful', 'Pending', 'Failed'];

  const handleClear = () => {
    setDateRange({ start: null, end: null });
    setSelectedTransactionTypes([]);
    setSelectedTransactionStatuses([]);
    setActiveTab('');
  };

  return (
    <div className="h-full flex flex-col p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Filter</h3>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {['Today', 'Last 7 days', 'This month', 'Last 3 months'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 border h-9 border-gray-100 text-sm hover:bg-[#EFF1F6] rounded-[100px] transition-colors ${
              activeTab === tab ? 'bg-gray-200' : 'bg-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Date Range */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Date Range</h4>
        <div className="flex gap-2">
          <CustomDatePicker
            value={dateRange.start}
            onChange={date => setDateRange({ ...dateRange, start: date })}
            placeholder="Start date"
          />
          <CustomDatePicker
            value={dateRange.end}
            onChange={date => setDateRange({ ...dateRange, end: date })}
            placeholder="End date"
          />
        </div>
      </div>

      {/* Transaction Type */}
      <div className="mb-6">
        <MultiSelectDropdown
          label="Transaction Type"
          options={transactionTypes}
          selectedOptions={selectedTransactionTypes}
          onChange={setSelectedTransactionTypes}
          placeholder="Select transaction types"
        />
      </div>

      {/* Transaction Status */}
      <div className="mb-6">
        <MultiSelectDropdown
          label="Transaction Status"
          options={transactionStatuses}
          selectedOptions={selectedTransactionStatuses}
          onChange={setSelectedTransactionStatuses}
          placeholder="Select transaction statuses"
        />
      </div>

      {/* Spacer to push buttons to the bottom */}
      <div className="flex-1" />

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleClear}
          className="flex-1 border border-gray-200 px-4 py-2 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition-colors"
        >
          Clear
        </button>
        <button
          onClick={onApply}
          className="flex-1 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
