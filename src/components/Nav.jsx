import { Link } from "react-router-dom";
import Logincheck from "../lib/Loginchecker";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Nav() {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    console.log("logout clicked");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className="navBar">
  //         <Link to="/">
  //           <button>Home</button>
  //         </Link>
  //         <Link to="/blog">
  //           <button>Blog</button>
  //         </Link>
  //         <Link to="/about">
  //           <button>About</button>
  //         </Link>
  //         <button onClick={handleLogout}>Logout</button>
  //       </div>
  //     </>
  //   );
  // }

  if (authContext.stateTest == true) {
    return (
      <>
        <div className="navBar">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/blog">
            <button>Blog</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </>
    );
  }

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
