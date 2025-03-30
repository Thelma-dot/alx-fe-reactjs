import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {user && (
        <div className="border p-4 rounded mt-4 text-center">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
