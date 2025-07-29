import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo">
          <img src="/Public/Logo.png" alt="" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <a href="services.html" className="nav-link" target="_blank">
            Services
          </a>
          <a href="contact.html" className="nav-link" target="_blank">
            Contact
          </a>
          <a href="What I Learned.html" className="nav-link" target="_blank">
            What I Learned
          </a>
          <Link to="/post" className="nav-link">
            Post
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>

      <footer className="footer" id="contact">
        <nav className="footer-nav">
          <a href="Html.html" className="footer-link">
            About
          </a>
          <a href="services.html" className="footer-link" target="_blank">
            Courses
          </a>
          <a href="contact.html" className="footer-link" target="_blank">
            Contact
          </a>
          <a href="What I Learned.html" className="footer-link" target="_blank">
            What I Learned
          </a>
        </nav>
        <p>© 2025 Tech Hub</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;