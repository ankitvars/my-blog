import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Div = styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  margin: 0 auto;
  box-sizing: border-box;
`;

function App() {
  return (
    <div className="app">
      <Navbar />
      <Div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Div>
      <Footer />
    </div>
  );
}

export default App;
