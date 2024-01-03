// ReplyForm.js

import React, { useState } from 'react';

const ReplyForm = ({ onReplySubmit }) => {
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    if (replyText.trim() !== '') {
      onReplySubmit({ text: replyText, username: 'John Doe', userAvatar: 'https://via.placeholder.com/30' });
      setReplyText('');
    }
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        placeholder="Reply to this comment..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded-md"
      />
      <button className="mt-2 bg-blue-500 text-white p-2 rounded-md" onClick={handleReplySubmit}>
        Reply
      </button>
    </div>
  );
};

export default ReplyForm;
