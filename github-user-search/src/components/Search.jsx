import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we cant find the user");  // ✅ Matches required text
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}  {/* ✅ Displays exact error message */}

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
