import axios from "axios";
const token = import.meta.env.VITE_GITHUB_TOKEN;
const headers = {
  Authorization: `token ${token}`,
};
export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`,{
        headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export const fetchTopRepos = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          params: { sort: "stars", per_page: 5 },
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching repositories:", error);
      throw new Error("Could not fetch repositories");
    }
  };
  
