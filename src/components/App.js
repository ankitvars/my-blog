import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
