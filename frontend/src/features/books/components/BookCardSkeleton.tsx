const BookCardSkeleton = () => {
  return (
    <div className="border border-gray-700 rounded p-4 animate-pulse bg-gray-800 h-32">
      <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded mb-1 w-1/2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
    </div>
  );
};

export default BookCardSkeleton;
