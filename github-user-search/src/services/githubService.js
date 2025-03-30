import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    // Construct query string with advanced search parameters
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}${query}`);

    return response.data; // GitHub API returns an object with 'items' array
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
