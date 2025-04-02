import DepositIcon from '../icons/DepositIcon';
import WithdrawalIcon from '../icons/WithdrawaIcon';
import FilterIcon from '../icons/FilterIcon';
import ExportListIcon from '../icons/ExportListIcon';
import { Transaction } from '../types';

interface TransactionsProps {
  onFilterClick: () => void;
  transactions: Transaction[] | undefined;
}

export default function TransactionsHistory({
  onFilterClick,
  transactions,
}: TransactionsProps) {
  return (
    <div className="p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-gray-200 border-b">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {transactions?.length} Transactions
          </h2>
          <p className="text-sm text-gray-500">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onFilterClick}
            className="flex items-center gap-2 px-4 py-2 bg-[#EFF1F6] border border-gray-200 rounded-full text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Filter
            <FilterIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#EFF1F6] border border-gray-200 rounded-full text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors">
            Export list
            <ExportListIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="space-y-1">
        {transactions?.map((transaction, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-red-300 "
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  transaction.type === 'deposit' ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                {transaction.type === 'deposit' ? (
                  <DepositIcon className="w-5 h-5" />
                ) : (
                  <WithdrawalIcon className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="text-gray-900 font-medium">
                  {transaction?.metadata?.product_name}
                </p>
                <p className="text-sm text-gray-500">
                  {transaction?.metadata?.name || '--'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-900 font-medium">{`USD ${transaction.amount}`}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
