// src/pages/BlogPage.jsx
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard'; // Import BlogCard component

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogPosts = [
      {
        id: 1,
        title: 'Bridging Academia and Industry',
        date: 'October 10, 2024',
        description: 'How UniConnect is helping students and professionals collaborate for innovation.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJEht0sbyJlxuUmk3eTTl8nOyl0ocxRLIkA&s',
      },
      {
        id: 2,
        title: 'The Future of Education in Ethiopia',
        date: 'September 25, 2024',
        description: 'Exploring the role of technology in transforming education and research through UniConnect.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcis6U3_JHzTj3TX2pkGdNN3vLQ1_rICl2YQ&s',
      },
      {
        id: 3,
        title: 'Innovation Competitions Driving Growth',
        date: 'August 18, 2024',
        description: 'How UniConnect competitions are fostering new talent in Ethiopia’s tech industry.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKXszSi4DCXFt85wZQM7e4BqIMBrN-S5XOQ&s',
      },
      {
        id: 4,
        title: 'Harnessing Digital Tools for Agriculture',
        date: 'October 12, 2024',
        description: 'How UniConnect is using technology to improve agricultural practices in Ethiopia.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQDVjhRIz6uNVvuK304Q6F-TZ3Y5RWvoplQ&s',
      },
      {
        id: 5,
        title: 'Empowering Women through Technology',
        date: 'September 15, 2024',
        description: 'How UniConnect empowers women in tech and promotes gender equality.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLL0YGGmkZLbjsXQ-HX7QSH3LXATyYmuYuw&s',
      },
      {
        id: 6,
        title: 'The Rise of E-Commerce in Ethiopia',
        date: 'October 1, 2024',
        description: 'Exploring how UniConnect is facilitating the growth of e-commerce in Ethiopia.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaE0c_YSW1SUe_l2LupMNDTAmew0k0Ojy5Q&s',
      },
    ];
    setPosts(blogPosts);
  }, []);

  return (
    <div className="container mx-auto my-10 mt-20">
      <h2 className="text-4xl font-bold text-[#5e208f] text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
