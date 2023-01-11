import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
// import classes from './Button.module.css';
import styled from 'styled-components';

const BlogHeading = styled.h1`
  text-align: center;
  color:#2196f3;
  margin-bottom: 40px;
`;

const PostSubTitle = styled.p`
font-size: 14px;
line-height: 24px;
letter-spacing: normal;
`;
const PostContent = styled.p `
font-size: 14px;
line-height: 24px;
letter-spacing: normal;
`;

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
      <BlogHeading> Tech Blog </BlogHeading>
      {/* <button className={classes.button}>Create Post</button> */}

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subtitle}</PostSubTitle>
          <PostContent>{post.content}</PostContent>
        </div>
      ))}
    </div>
  );
}

// const styles = {
//   heading: {
//     marginTop: 30,
//     fontSize: 60,
//   },
// };

export default Home;
