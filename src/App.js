import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
  <p>© {new Date().getFullYear()} React Blog CMS. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
