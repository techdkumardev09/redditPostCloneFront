import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../api/postService";
import { addPost } from "../redux/slices/postsSlice";
import { toast } from "react-toastify";

const Home = () => {
  
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.post);
  const [posts, setPosts] = useState([]);
  console.log(postsData);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      console.log(fetchedPosts);
      setPosts(fetchedPosts);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostSubmit = async (newPost) => {
    try {
      const createdPost = await createPost(newPost);
      if (createdPost) {
        toast.success("post created successfully");
        fetchPosts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-[840px] px-8">
      <PostForm onPostSubmit={handlePostSubmit} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
