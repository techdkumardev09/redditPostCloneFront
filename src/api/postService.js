import axios from "axios"

const accessToken = localStorage.getItem('jwtToken');
const BASE_URL = "https://redditclonebackend.onrender.com/api"; 

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+accessToken}
});

export const getPosts = async () => {
  try {
    const response = await instance.post("/posts/")
    const data = response;
    return data;
  } catch (error) {
    // console.error("Error fetching posts:", error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = instance.post("/posts/", postData)
    const createdPost = response
    return createdPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
