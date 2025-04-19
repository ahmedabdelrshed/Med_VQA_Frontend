const QuestionSkeleton = () => {
  return (
    <div className="">
      <div className="skeleton bg-gray-400 animate-pulse rounded-md  w-48 h-28 lg:w-2xs lg:h-40"></div>
      <div className="skeleton w-36  h-7 lg:h-9 lg:w-56  bg-gray-400 animate-pulse  mt-2 rounded-full"></div>
      <div className="skeleton w-36  h-7 ml-auto lg:h-9 lg:w-56  bg-gray-400 animate-pulse  mt-2 rounded-full"></div>
    </div>
  );
};

export default QuestionSkeleton;
