import React from "react";
import RepoSkeleton from "../skeleton/RepoSkeleton";

const Repo = ({ repos, loading }) => {
  if (loading) {
    return <RepoSkeleton />;
  }

  if (repos?.length === 0) {
    return <p className="text-gray-500">No repositories found.</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Top 5 Repositories</h3>
      <div className="space-y-4">
        {repos?.map((repo) => (
          <div
            key={repo.id}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <a
                href={repo?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                {repo?.name}
              </a>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span>{repo?.stargazers_count}</span>
              </div>
            </div>
            {repo?.description && (
              <p className="text-gray-600 mt-2">{repo?.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repo;
