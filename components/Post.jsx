import React, { useState, useEffect } from 'react';

function Post() {
  const [Posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="main-content">Loading...</div>;
  }

  if (error) {
    return <div className="main-content" style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <section className="main-content">
      {Posts.map((post) => (
        <div key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Post;