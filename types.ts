
export interface Transaction {
  id: string;
  user: string;
  amount: number;
  timeAgo: number; // minutes
  type: 'withdrawal' | 'deposit' | 'profit';
}

export interface HistoryItem {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending';
}

export interface WalletCardProps {
  currency: string;
  value: number;
  trend: number;
}

export interface PendingDeposit {
  id: string;
  amount: number;
  unlockTime: number; // Timestamp when balance should be updated
  status: 'processing' | 'completed';
}
