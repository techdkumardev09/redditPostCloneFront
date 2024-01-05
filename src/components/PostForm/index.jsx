// PostForm.js

import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [activeTab, setActiveTab] = useState('text'); // 'text' or 'image'
  const [postText, setPostText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePostSubmit = () => {
    if (activeTab === 'text' && postText.trim() !== '') {
      onPostSubmit({
        text: postText,
        title: postTitle,
      });
      setPostText('');
      setPostTitle('');
    } else if (activeTab === 'image' && imagePreview) {
      // Handle image upload (you may want to implement a proper image upload solution)
      const imageUrl = URL.createObjectURL(imagePreview);
      onPostSubmit({
        imageUrl,
        title: postTitle,
        likes: 0,
        comments: [],
        postTime: getCurrentTime(),
        userAvatar: 'https://via.placeholder.com/40',
        username: 'John Doe',
      });
      setPostTitle('');
      setImagePreview(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(file);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md">
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => handleTabChange('text')}
        >
          Write a Post
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => handleTabChange('image')}
        >
          Upload Image
        </button>
      </div>

      {activeTab === 'text' && (
        <>
          <input
            type="text"
            placeholder="Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="w-full mb-2 border border-gray-300 p-2 rounded-md"
          />
          <textarea
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-full h-20 border border-gray-300 p-2 rounded-md"
          />
        </>
      )}

      {activeTab === 'image' && (
        <>
          <input
            type="text"
            placeholder="Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="w-full mb-2 border border-gray-300 p-2 rounded-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />
          {imagePreview && (
            <img src={URL.createObjectURL(imagePreview)} alt="Preview" className="w-full mb-2 rounded-md" />
          )}
        </>
      )}

      <button
        className="mt-2 bg-blue-500 text-white p-2 rounded-md"
        onClick={handlePostSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default PostForm;
