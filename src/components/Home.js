import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log('posts', posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <h1> Tech Blog </h1>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
