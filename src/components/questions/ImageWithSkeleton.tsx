import { useState } from "react";

const ImageWithSkeleton = ({ imageUrl }: { imageUrl: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      {isLoading && (
        <div className="skeleton bg-gray-400 animate-pulse rounded-md  w-48 h-28 lg:w-2xs lg:h-40"></div>
      )}
      <img
        className={`rounded-md  w-48 h-28 lg:w-2xs lg:h-40 transition-opacity duration-300 ${
          isLoading && "hidden"
        }`}
        src={imageUrl}
        alt=""
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
