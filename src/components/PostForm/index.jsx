// PostForm.js
import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [postText, setPostText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handlePostSubmit = () => {
    const formData = new FormData();

    // Append text and title
    formData.append("text", postText);
    formData.append("title", postTitle);

    if (imagePreview) {
      formData.append("image", imagePreview, imagePreview.name);
    }
  
    onPostSubmit(formData);

    // Reset the state
    setPostText('');
    setPostTitle('');
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setImagePreview(file);
    }
  };

  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md">
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

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2"
      />
      {imagePreview && (
        <img src={URL.createObjectURL(imagePreview)} alt="Preview" className="w-full mb-2 rounded-md" />
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
