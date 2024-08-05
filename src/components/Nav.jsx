import { Link } from "react-router-dom";

function Nav() {
  // here we will have all the click handlers

  return (
    <>
      <div className="navBar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/blog">
          <button>Blog</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </>
  );
}

export default Nav;
