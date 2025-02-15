import React, { useState, useCallback, useMemo, lazy, Suspense } from "react";
import { fetchTopRepos, fetchUser } from "./api";
import Error from "./component/Error";
import SearchBar from "./component/SearchBar";
import Loading from "./component/Loading";

// Lazy load 
const Profile = lazy(() => import("./component/Profile"));
const Repo = lazy(() => import("./component/Repo"));

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoized handleSearch
  const handleSearch = useCallback(async (username) => {
    setLoading(true);
    setError(null);

    try {
      const [userData, reposData] = await Promise.all([
        fetchUser(username),
        fetchTopRepos(username),
      ]);
      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Memoize repos
  const topRepos = useMemo(() => repos.slice(0, 5), [repos]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">GitHub User Finder</h1>
        <SearchBar onSearch={handleSearch} loading={loading} />
        
        <div className="mt-8 space-y-8">
          {/* {loading} */}
          {loading && <Loading />}
          {error && <Error message={error} />}
          {user && (
            <Suspense fallback={<div className="text-center"><Loading /></div>}>
              <Profile loading={loading} user={user}/>
              <Repo loading={loading} repos={repos}/>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
