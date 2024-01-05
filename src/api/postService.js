import axios from "axios";

const accessToken = localStorage.getItem("jwtToken");
const BASE_URL = "https://liberating-rose-hour.glitch.me/api";
// const BASE_URL = "https://redditclonebackend.onrender.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Authorization: "Bearer " + accessToken },
});

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

export const getPosts = async () => {
  try {
    const accessToken = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL}/posts/`, {
      Authorization: `Bearer ${accessToken}`,
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = instance.post("/posts/", null, postData);
    const createdPost = response;
    return createdPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/${postId}/like`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const addComment = async (postId, commentText) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/posts/${postId}/comments`,
      { text: commentText },
      null,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const replayComment = async (postId, commentText) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/posts/${postId}/comments`,
      { text: commentText },
      null,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
