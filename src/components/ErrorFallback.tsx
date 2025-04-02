interface ErrorFallbackProps {
  error: string;
  onRetry: () => void;
}

const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold mb-2">
          Oops, Something Went Wrong!
        </h2>
        <p className="mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
