import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_SEARCH_API = `${GITHUB_API_URL}/search/users`;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

export const searchUsers = async (searchParams) => {
  try {
    const { username, location, minRepos, page = 1, perPage = 10 } = searchParams;
    
    // Build search query
    let query = username;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(GITHUB_SEARCH_API, {
      params: {
        q: query.trim(),
        page,
        per_page: perPage
      }
    });

    return {
      users: response.data.items,
      total: response.data.total_count,
      hasMore: response.data.items.length > 0
    };
  } catch (error) {
    throw new Error('Failed to search users');
  }
};