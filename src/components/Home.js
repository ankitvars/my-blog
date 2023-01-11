import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 40px;
`;

const PostSubTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: normal;
`;
const PostContent = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: normal;
`;
const Post = styled.div`
  border: 2px solid white;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;
  background: white;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: #55636f;
  }
  h3:hover {
    color: #48d1cc;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 846px) {
    border: 2px solid darkorange;
  }
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
        <Post key={`post-${index}`} className="post">
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subtitle}</PostSubTitle>
          <PostContent>{post.content}</PostContent>
        </Post>
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
