import React from 'react';

interface StateHandlerProps {
  isLoading: boolean;
  isEmpty: boolean;
  loadingMessage?: string;
  emptyMessage?: string;
  children: React.ReactNode;
}

export default function StateHandler({
  isLoading,
  isEmpty,
  loadingMessage = 'Loading...',
  emptyMessage = 'No data available.',
  children,
}: StateHandlerProps) {
  if (isLoading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">{loadingMessage}</div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="min-h-[200px] flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">{emptyMessage}</div>
      </div>
    );
  }

  return <>{children}</>;
}
