import ProfileSkeleton from "../skeleton/ProfileSkeleton";
import RepoSkeleton from "../skeleton/RepoSkeleton";

const Loading=()=> {
    return (
      <div className="text-center py-8">
        {/* <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading...</p> */}
        <ProfileSkeleton />
        <RepoSkeleton />
      </div>
    );
  }
  export default Loading