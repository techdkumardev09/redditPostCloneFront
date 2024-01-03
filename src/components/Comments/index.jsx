// Comment.js

import React, { useState } from 'react';
import ReplyForm from '../ReplyForm';


const Comment = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replies, setReplies] = useState(comment.replies || []);

  const handleReplySubmit = (newReply) => {
    setReplies([...replies, { id: replies.length + 1, ...newReply, time: getCurrentTime() }]);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-start mb-4">
      <img
        src={comment.userAvatar || 'https://via.placeholder.com/30'}
        alt="User Avatar"
        className="rounded-full w-5 h-5 mr-2"
      />
      <div>
        <div className="flex items-center mb-2">
          <span className="font-semibold">{comment.username || 'Anonymous'}</span>
          <span className="text-gray-500 ml-2">{comment.time || '12:00'}</span>
          <p className="ml-2">{comment.text}</p>
        </div>
        {console.log('=====replies', comment)}
        {replies.length > 0 && (
          <div className="ml-6">
            {replies.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
        {showReplyForm && <ReplyForm onReplySubmit={handleReplySubmit} />}
        <button
          className="text-blue-500 ml-6 cursor-pointer"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          {showReplyForm ? 'Cancel Reply' : 'Reply'}
        </button>
      </div>
    </div>
  );
};

export default Comment;
