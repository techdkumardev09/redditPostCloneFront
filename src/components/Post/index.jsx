// Post.js

import React, { useState } from "react";
import Comment from "../Comments";

const Post = ({ post, handleLike, handleComment, repliesHandler }) => {
  const [likes] = useState(post.likes.length);
  const [newComment, setNewComment] = useState("");
  const [showCommentSection, setshowCommentSection] = useState(false);

  const handleCommentInside = async (id, newComment) => {
    handleComment(id, newComment);
    setNewComment("");
  };

  const repliesHandlers = () => {
    repliesHandler()
  }
  return (
    <div className="bg-gray-100 p-4 my-4 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-4">
        <img
          src={post.userAvatar || "https://via.placeholder.com/40"}
          alt="User Avatar"
          className="rounded-full w-8 h-8 mr-2"
        />
        <span className="text-gray-700">{post.username || "John Doe"}</span>
      </div>
      <p className="text-gray-700 w-full text-base mb-3">{post.title}</p>
      <p className="text-gray-700 w-full text-base mb-3">{post.text}</p>
      {post?.imageUrl && (
        <img height="400" width="400" src={post?.imageUrl} alt="" />
      )}
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex justify-between mt-4">
        <button className="text-blue-500" onClick={() => handleLike(post.id)}>
          {likes.length > 0 && likes.length} Like
        </button>
        <button
          className="text-gray-500"
          onClick={() => setshowCommentSection(!showCommentSection)}
        >
          {post?.comments?.length > 0 && post?.comments?.length} Comments{" "}
        </button>
      </div>
      {showCommentSection && (
        <div className="">
          <div className="mt-4 flex gap-4 items-center">
            <div className="w-9/12">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded-md"
              />
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => handleCommentInside(post.id, newComment)}
            >
              Post Comment
            </button>
          </div>

          <div className="mt-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="text-gray-700">
                <Comment key={comment.id} id={comment.id} comment={comment} repliesHandler={repliesHandlers} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
