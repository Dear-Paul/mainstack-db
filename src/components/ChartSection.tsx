import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Transaction } from '../types';
import { formatDate } from '../utils';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface RevenueChartProps {
  transactions: Transaction[] | undefined;
}

export default function ChartSection({ transactions }: RevenueChartProps) {
  // Process transactions data for the chart
  const chartData = useMemo(() => {
    if (!transactions || transactions.length === 0) {
      return {
        labels: [],
        datasets: [],
        firstDate: '',
        lastDate: '',
      };
    }

    // Sort transactions by date to ensure correct order
    const sortedTransactions = [...transactions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Extract dates and amounts
    const labels = sortedTransactions.map(transaction => transaction.date);
    const amounts = sortedTransactions.map(transaction =>
      parseFloat(String(transaction?.amount))
    );

    // Get first and last dates
    const firstDate = labels[0] || '';
    const lastDate = labels[labels.length - 1] || '';

    return {
      labels,
      datasets: [
        {
          label: 'Transaction Amount',
          data: amounts,
          borderColor: '#FF5403',
          backgroundColor: 'rgba(255, 84, 3, 0.1)',
          fill: false,
          tension: 0.4,
        },
      ],
      firstDate,
      lastDate,
    };
  }, [transactions]);

  return (
    <div className="flex-1">
      <>
        <div className="h-64  w-[690px] border-b border-[#EFF1F6]">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false, // Hide x-axis labels (dates) on the chart
                },
                y: {
                  display: false, // Hide y-axis labels (amounts)
                },
              },
              plugins: {
                legend: {
                  display: false, // Hide legend
                },
                tooltip: {
                  enabled: true,
                },
              },
            }}
          />
        </div>
        <div className="flex justify-between  w-[690px] mt-2">
          <p className="text-sm text-gray-500">
            {formatDate(chartData.firstDate)}
          </p>
          <p className="text-sm text-gray-500">
            {formatDate(chartData.lastDate)}
          </p>
        </div>
      </>
    </div>
  );
}
