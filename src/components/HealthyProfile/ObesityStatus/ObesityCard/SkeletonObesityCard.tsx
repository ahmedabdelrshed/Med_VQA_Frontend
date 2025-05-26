const SkeletonObesityCard = () => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-2xl shadow-md p-4  animate-pulse">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
        <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
      </div>

      <div className="h-3 w-40 bg-gray-200 rounded mb-1"></div>
      <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>

      <div className="flex justify-between items-center">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="h-6 w-32 bg-gray-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonObesityCard;
