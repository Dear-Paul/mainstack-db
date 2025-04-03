import { useState } from 'react';
import ChartSection from './ChartSection';
import FilterSidebar from './FilterSidebar';
import Slider from './Slider';
import TransactionsHistory from './TransactionsHistory';
import { useTransactions } from '../hooks/useTransactions';
import { useWallet } from '../hooks/useWallet';
import Wallet from './Wallet';
import AvailableBalance from './AvailableBalance';
import StateHandler from './StateHandler';

export default function Revenue() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { data: transactions, isLoading } = useTransactions();
  const { data: wallet, isLoading: loadingWallet } = useWallet();

  return (
    <section className="mx-24">
      {/* Available Balance Section */}
      <AvailableBalance balance={wallet?.balance} />

      {/* Chart and Wallet Side by Side */}
      <div className="flex  gap-6 mb-12 mr-16 pl-4">
        {/* Chart Section */}
        <StateHandler
          isEmpty={!transactions || transactions.length === 0}
          isLoading={isLoading}
          width="w-[690px]"
        >
          <ChartSection transactions={transactions} />
        </StateHandler>
        {/* Wallet Section */}
        <div className="w-64">
          <StateHandler
            isEmpty={!wallet}
            isLoading={loadingWallet}
            width="w-[290px]"
          >
            <Wallet wallet={wallet} />
          </StateHandler>
        </div>
      </div>
      <StateHandler
        isEmpty={!transactions || transactions.length === 0}
        isLoading={isLoading}
      >
        <TransactionsHistory
          onFilterClick={() => setIsFilterOpen(true)}
          transactions={transactions}
        />
      </StateHandler>

      <Slider isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
        <FilterSidebar
          onClose={() => setIsFilterOpen(false)}
          onApply={() => setIsFilterOpen(false)}
        />
      </Slider>
    </section>
  );
}
