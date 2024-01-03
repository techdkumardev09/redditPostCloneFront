import React, { useState } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";

const Home = () => {
  const dummyData = [
    {
      id: 1,
      text: "This is a sample post!",
      image:
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

  const [posts, setPosts] = useState(dummyData);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
  };

  return (
    <div className="container mx-auto mt-8 max-w-[840px] px-8">
      <PostForm onPostSubmit={handlePostSubmit} />
      {dummyData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
