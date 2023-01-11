import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;
  margin-right: 20px;
  
  &:hover {
    text-decoration: underline;
  }
`;
const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;

  li {
    margin-left: 10px;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavIcon = styled.img`
  height: 40px;
  width: 40px;
  margin: 18px;
  align-self: auto;
  cursor: pointer;
`;
function Navbar() {
  return (
    <NavBar>
      <Link to="/">
        <NavIcon
          // src="https://cdn-icons-png.flaticon.com/128/124/124022.png"
          // src="https://cdn-icons-png.flaticon.com/128/3992/3992633.png"
          src="https://cdn-icons-png.flaticon.com/128/3991/3991895.png"
          alt=""
          id="nav-icon"
        />
      </Link>

      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/create-post">Create Post</StyledLink>
        </li>
      </NavList>
    </NavBar>
  );
}

export default Navbar;
