import { ReactElement } from 'react';

export interface IconProps {
  fill?: string;
  className?: string;
}

export interface NavItem {
  id?: string;
  label: string;
  isActive: boolean;
  extraLabel?: string;
  subItems?: SubItem[];
  icon?: ReactElement<IconProps>;
  path?: string;
}

export interface SubItem {
  id: number;
  label: string;
  description: string;
  iconColor: string;
}

export interface WalletData {
  balance: string;
  ledgerBalance: string;
  totalPayout: string;
  totalRevenue: string;
  pendingPayout: string;
}
interface MetaData {
  name?: string;
  type?: string;
  email?: string;
  quantity?: number;
  country?: string;
  product_name: string;
}
export interface Transaction {
  amount: string | number;
  date: string;
  type: 'deposit' | 'withdrawal';
  status?: 'Successful' | 'Pending';
  metadata: MetaData;
}

export interface User {
  name: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
