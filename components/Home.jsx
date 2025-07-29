import React from 'react';

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <h1>Welcome to Tech Hub</h1>
        <p>Your Gateway to Technology Learning</p>
        <a href="#.html" className="cta-button">Join Tech Hub</a>
      </section>
      <main className="main-content">
        <div className="card">
          <h3>Courses</h3>
          <p>Learn programming and tech skills</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>Build real-world applications</p>
        </div>
        <div className="card">
          <h3>Community</h3>
          <p>Connect with tech enthusiasts</p>
        </div>
      </main>
    </>
  );
}

export default Home;