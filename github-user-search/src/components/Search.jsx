import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState({ users: [], total: 0, hasMore: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPage(1); // Reset to first page on new search

    try {
      const results = await searchUsers({
        username: searchTerm,
        location,
        minRepos: minRepos ? parseInt(minRepos) : undefined,
        page: 1
      });
      setSearchResults(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 mb-2">Username</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location..."
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Minimum Repositories</label>
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Minimum number of repositories"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 w-full md:w-auto"
          >
            Search
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-400">Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-center py-8">
          <p className="text-red-400">{error}</p>
        </div>
      )}
      
      {searchResults.users.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Search Results ({searchResults.total} users)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.users.map((user) => (
              <div key={user.id} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
                <div className="flex flex-col items-center">
                  <img 
                    src={user.avatar_url} 
                    alt={user.name || user.login}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{user.name || user.login}</h3>
                  <p className="text-gray-400">@{user.login}</p>
                  <p className="text-gray-400 mt-2">{user.location ? `📍 ${user.location}` : 'Location not specified'}</p>
                  <p className="text-gray-400">Repositories: {user.public_repos}</p>
                  <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-700"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
          {searchResults.hasMore && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setPage(page + 1)}
                className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;