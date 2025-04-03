import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TransactionsHistory from '../components/TransactionsHistory';
import { Transaction } from '../types';
import '@testing-library/jest-dom';
import { formatDate } from '../utils';

// Mock the icons
jest.mock('../icons/DepositIcon', () => () => (
  <div data-testid="deposit-icon">DepositIcon</div>
));
jest.mock('../icons/WithdrawaIcon', () => () => (
  <div data-testid="withdrawal-icon">WithdrawalIcon</div>
));
jest.mock('../icons/FilterIcon', () => () => (
  <div data-testid="filter-icon">FilterIcon</div>
));
jest.mock('../icons/ExportListIcon', () => () => (
  <div data-testid="export-list-icon">ExportListIcon</div>
));

describe('TransactionsHistory Component', () => {
  const mockTransactions: Transaction[] = [
    {
      type: 'deposit',
      metadata: { product_name: 'Product A', name: 'John Doe' },
      amount: 100,
      date: '2023-10-01',
    },
    {
      type: 'withdrawal',
      metadata: { product_name: 'Product B' },
      amount: 50,
      date: '2023-10-02',
    },
  ];

  const mockOnFilterClick = jest.fn();

  test('renders header with transaction count and subtitle', () => {
    render(
      <TransactionsHistory
        onFilterClick={mockOnFilterClick}
        transactions={mockTransactions}
      />
    );

    expect(screen.getByText('2 Transactions')).toBeInTheDocument();
    expect(
      screen.getByText('Your transactions for the last 7 days')
    ).toBeInTheDocument();
  });

  test('renders transaction list with correct details', () => {
    render(
      <TransactionsHistory
        onFilterClick={mockOnFilterClick}
        transactions={mockTransactions}
      />
    );

    // First transaction (deposit)
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('USD 100')).toBeInTheDocument();
    expect(screen.getByText(formatDate('2023-10-01'))).toBeInTheDocument();
    expect(screen.getByTestId('deposit-icon')).toBeInTheDocument();

    // Second transaction (withdrawal)
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.getByText('--')).toBeInTheDocument(); // Fallback for missing name
    expect(screen.getByText('USD 50')).toBeInTheDocument();
    expect(screen.getByText(formatDate('2023-10-02'))).toBeInTheDocument();
    expect(screen.getByTestId('withdrawal-icon')).toBeInTheDocument();
  });

  test('calls onFilterClick when Filter button is clicked', async () => {
    render(
      <TransactionsHistory
        onFilterClick={mockOnFilterClick}
        transactions={mockTransactions}
      />
    );

    const filterButton = screen.getByText('Filter');
    await userEvent.click(filterButton);

    expect(mockOnFilterClick).toHaveBeenCalledTimes(1);
  });
});
