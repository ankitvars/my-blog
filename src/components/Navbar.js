import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          // src="https://cdn-icons-png.flaticon.com/128/124/124022.png"
          // src="https://cdn-icons-png.flaticon.com/128/3992/3992633.png"
          src='https://cdn-icons-png.flaticon.com/128/3991/3991895.png'
          alt=""
          id="nav-icon"
        />
      </Link>

      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
