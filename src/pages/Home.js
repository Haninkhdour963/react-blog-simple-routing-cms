import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { slug: 'post-1', title: 'Post One' },
  { slug: 'post-2', title: 'Post Two' }
];

const Home = () => (
  <div>
    <h1>📝 Blog Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
