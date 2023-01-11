import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import Radium from 'radium';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    heading: {
      color: '#2e3138',
      textAlign: ' center',
    },
    para: {
      color: 'teal',
      marginBottom: '100px',
    },
  };
  return (
    <div>
      <h1 style={styles.heading}>{post.title}</h1>
      <div id="blog-by">{post.subtitle}</div>
      <p style={styles.para}>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);
