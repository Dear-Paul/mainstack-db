import { useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../api/api';
import { Transaction } from '../types';

export const useTransactions = () => {
  return useQuery<Transaction[], Error>({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
  });
};
