import InfoIcon from '../icons/InfoIcon';
import { WalletData } from '../types';

interface WalletProps {
  wallet: WalletData | undefined;
}

const walletItems = [
  { title: 'Ledger Balance', key: 'ledgerBalance' },
  { title: 'Total Payout', key: 'totalPayout' },
  { title: 'Total Revenue', key: 'totalRevenue' },
  { title: 'Pending Payout', key: 'pendingPayout' },
];

export default function Wallet({ wallet }: WalletProps) {
  return (
    <div className="w-[295px]  space-y-6">
      {walletItems.map(item => (
        <div key={item.key} className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-2xl font-semibold text-gray-900">
              {wallet?.[item.key as keyof WalletData]}
            </p>
          </div>
          <InfoIcon className="w-4 h-4" />
        </div>
      ))}
    </div>
  );
}
