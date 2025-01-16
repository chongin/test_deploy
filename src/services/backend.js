import axios from "axios";

// Configure the Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch the game pool information
export const fetchGamePool = async () => {
  try {
    const response = await apiClient.get("/game_pool");
    return response.data;
  } catch (error) {
    console.error("Error fetching game pool:", error);
    throw error;
  }
};


// Export the API client for reuse
export default apiClient;
