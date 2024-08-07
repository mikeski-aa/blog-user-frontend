import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Nav from "../components/Nav";
import { createContext } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

async function handleFormLogin(username, password) {
  const user = {
    username: username,
    password: password,
  };

  console.log(JSON.stringify(user));

  try {
    const url = "http://localhost:3000/user/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const json = await response.json();

    // here I probably need to add something to handle if the response is an error
    // or if a user already exists, console logs are not enough for the user
    console.log(json.token);
    localStorage.setItem("token", json.token);
    console.log(localStorage);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // need to add validation handling for spaces or forbidden characters
  const handleUserInput = (e, setUsername) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e, setPassword) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <>
      <Nav></Nav>
      <div className="mainContent">
        <h2>Log in</h2>
        <form method="none" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => handleUserInput(e, setUsername)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => handlePasswordInput(e, setPassword)}
            />
          </div>
          <button onClick={() => handleFormLogin(username, password)}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
