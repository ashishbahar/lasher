import axios from "axios";

const strapiAPI = axios.create({
  baseURL: "http://localhost:1337/api", // Your Strapi API URL
});

export const getArticles = async () => {
  try {
    const response = await strapiAPI.get("/articles"); // Adjust the endpoint to your content type
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
};
