import { Link } from "react-router-dom";
import Logincheck from "../lib/Loginchecker";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import "../styles/Nav.css";

function Nav() {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    console.log("logout clicked");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (authContext.authState == true) {
    return (
      <>
        <div className="navBar">
          <div className="loggedUser">
            <h4>Welcome</h4>
            <h3>{authContext.currentUser}</h3>
          </div>
          <Link to="/">
            <button className="navBtn">Home</button>
          </Link>
          <Link to="/blog">
            <button className="navBtn">Blog</button>
          </Link>
          <Link to="/about">
            <button className="navBtn">About</button>
          </Link>
          <button onClick={handleLogout} className="navBtn">
            Logout
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="navBar">
        <div className="loggedUser"></div>
        <Link to="/">
          <button className="navBtn">Home</button>
        </Link>
        <Link to="/blog">
          <button className="navBtn">Blog</button>
        </Link>
        <Link to="/login">
          <button className="navBtn">Login</button>
        </Link>
        <Link to="/register">
          <button className="navBtn">Register</button>
        </Link>
        <Link to="/about">
          <button className="navBtn">About</button>
        </Link>
      </div>
    </>
  );
}

export default Nav;
