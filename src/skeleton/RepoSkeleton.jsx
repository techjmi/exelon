import React from "react";

const RepoSkeleton = () => {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-bold mb-4">Top 5 Repositories</h3>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md animate-pulse"
        >
          {/* Repo Name Placeholder */}
          <div className="h-5 w-2/3 bg-gray-300 rounded mb-3"></div>
          {/* Stars Placeholder */}
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-6 bg-gray-300 rounded"></div>
          </div>
          {/* Description Placeholder */}
          <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
          <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default RepoSkeleton;
