import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Avatar Placeholder */}
        <div className="w-32 h-32 rounded-full bg-gray-300"></div>

        {/* Text Placeholder */}
        <div className="flex-1 space-y-4">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
          <div className="h-4 w-64 bg-gray-300 rounded"></div>
          <div className="mt-3">
            <div className="h-5 w-32 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
