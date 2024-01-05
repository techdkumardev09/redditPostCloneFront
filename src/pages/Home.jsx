import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../api/postService";
import { addPost } from "../redux/slices/postsSlice";

const Home = () => {
  const dummyData = [
    {
      id: 1,
      title: "post title",
      text: "This is a sample post!",
      imageUrl:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      likes: 10,
      username: "JohnDoe",
      comments: [
        {
          id: 1,
          text: "Great post!",
          username: "Alice",
          replies: [
            {
              id: 1,
              text: "Thanks, Alice!",
              username: "JohnDoe",
            },
          ],
        },
        {
          id: 2,
          text: "I love it!",
          username: "Bob",
          replies: [
            {
              id: 1,
              text: "Thanks, Bob!",
              username: "JohnDoe",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      text: "Creep found in metro",
      likes: 1,
      username: "Remax",
      comments: [
        {
          id: 1,
          text: "Great post!",
          username: "Charlie",
          replies: [
            {
              id: 1,
              text: "Thanks, Charlie!",
              username: "JaneDoe",
            },
          ],
        },
        {
          id: 2,
          text: "I love it!",
          username: "David",
          replies: [
            {
              id: 1,
              text: "Thanks, David!",
              username: "JaneDoe",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      text: "Around the time of 7, while I was going from Trinity to Krishnarajapura, I observed this uncle. Firstly I found him looking at some obscene photos on his phone which made another woman who was near to us kind of uncomfortable.",
      likes: 8,
      username: "EveDoe",
      comments: [
        {
          id: 1,
          text: "Great post!",
          username: "Frank",
          replies: [
            {
              id: 1,
              text: "Thanks, Frank!",
              username: "EveDoe",
            },
          ],
        },
        {
          id: 2,
          text: "I love it!",
          username: "Grace",
          replies: [
            {
              id: 1,
              text: "Thanks, Grace!",
              username: "EveDoe",
            },
          ],
        },
      ],
    },
  ];
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.post);
  const [posts, setPosts] = useState([]);
  console.log(postsData);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        console.log(fetchedPosts);
        setPosts(fetchedPosts);
        // dispatch(setPosts(fetchedPosts));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostSubmit = async (newPost) => {
    try {
      console.log(newPost);
      const createdPost = await createPost(newPost);
      console.log("createdPost", createdPost);
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
