import axios from "axios";

const accessToken = localStorage.getItem("jwtToken");
const BASE_URL = "https://liberating-rose-hour.glitch.me/api";

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
    const accessToken = localStorage.getItem("jwtToken");
    const response = await axios.post(`${BASE_URL}/posts/`, postData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const createdPost = response.data;
    return createdPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const accessToken = localStorage.getItem("jwtToken");
    const response = await axios.post(
      `${BASE_URL}/posts/${postId}/like/`,
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const addComment = async (postId, commentText) => {
  try {
    let data = {
      post_id: postId,
      text: commentText,
    };
    const response = await axios.post(`${BASE_URL}/comments/`, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const replayComment = async (postId, commentText) => {
  try {
    let data = {
      comment_id: postId,
      text: commentText,
    };
    const accessToken = localStorage.getItem("jwtToken");
    const response = await axios.post(`${BASE_URL}/replies/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
