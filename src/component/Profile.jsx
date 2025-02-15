import React from "react";
import ProfileSkeleton from "../skeleton/ProfileSkeleton";

const Profile = ({ user , loading}) => {
    if (loading) {
        return <ProfileSkeleton />;
      }
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            {user.name || user.login}
          </h2>
          <p className="text-gray-600 mt-1">{user.bio || "No bio available"}</p>
          <div className="mt-3">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Followers: {user.followers}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
