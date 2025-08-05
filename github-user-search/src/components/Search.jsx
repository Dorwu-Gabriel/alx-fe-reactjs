import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
  
      try {
        const data = await fetchUserData(searchTerm);
        setUserData(data);
      } catch (err) {
        setError("Looks like we can't find the user");
        setUserData(null);
      } finally {
        setLoading(false);
      }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {userData && (
        <div className="user-card">
          <img 
            src={userData.avatar_url} 
            alt={userData.name || userData.login}
            className="user-avatar"
          />
          <h2>{userData.name || userData.login}</h2>
          <p>Username: {userData.login}</p>
          <a 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
