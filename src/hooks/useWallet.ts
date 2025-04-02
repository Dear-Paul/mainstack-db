import { useQuery } from '@tanstack/react-query';
import { fetchWallet } from '../api/api';
import { WalletData } from '../types';

export const useWallet = () => {
  return useQuery<WalletData, Error>({
    queryKey: ['wallet'],
    queryFn: async () => {
      const data = await fetchWallet();
      return {
        balance: `USD ${data?.balance?.toLocaleString()}`,
        ledgerBalance: `USD ${data?.ledger_balance?.toLocaleString()}`,
        totalPayout: `USD ${data?.total_payout?.toLocaleString()}`,
        totalRevenue: `USD ${data?.total_revenue?.toLocaleString()}`,
        pendingPayout: `USD ${data?.pending_payout?.toLocaleString()}`,
      };
    },
  });
};
