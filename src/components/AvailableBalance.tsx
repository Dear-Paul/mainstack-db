interface AvailableBalanceProps {
  balance: string | undefined;
}

export default function AvailableBalance({ balance }: AvailableBalanceProps) {
  return (
    <div className="mb-6">
      <div className="flex gap-16 items-center">
        <div>
          <p className="text-sm text-gray-500">Available Balance</p>
          <p className="text-3xl font-semibold text-gray-900">{balance}</p>
        </div>
        <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Withdraw
        </button>
      </div>
    </div>
  );
}
