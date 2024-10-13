// src/components/BlogCard.jsx
import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#5e208f] mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{post.date}</p>
        <p className="text-gray-700 mb-4">{post.description}</p>
        <a
          href="#"
          className="bg-[#5e208f] text-white px-4 py-2 rounded hover:bg-[#440f69] transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
