import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import { addComment, createPost, getPosts, likePost } from "../api/postService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [afterData, setafterData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem("jwtToken");
    if (!localToken) {
      navigate("/login");
      return;
    }
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
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

  const handleLike = async (id) => {
    try {
      await likePost(id);
      fetchPosts();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (id, newComment) => {
    if (newComment.trim() !== "") {
      const fetchedComments = await addComment(id, newComment);
      fetchPosts();
      setafterData(!afterData);
      toast.success("commented added");
    }
  };

  const repliesHandler = async () => {
    fetchPosts();
    setafterData(!afterData);
  };

  useEffect(() => {
    // updend data
  }, [afterData]);

  return (
    <div className="container mx-auto mt-8 max-w-[840px] px-8">
      <PostForm onPostSubmit={handlePostSubmit} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleLike={handleLike}
          handleComment={handleComment}
          repliesHandler={repliesHandler}
        />
      ))}
    </div>
  );
};

export default Home;
