import Nav from "../components/Nav";
import { useState } from "react";
import { createContext } from "react";

async function handleFormRegister(username, password) {
  const user = {
    username: username,
    password: password,
  };

  try {
    const url = "http://localhost:3000/user/register";
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
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // input handlers
  const handlePasswordInput = (e, setPassword) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleUserInput = (e, setUsername) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  return (
    <>
      <Nav></Nav>

      <div className="card">
        <button onClick={() => test()}>User test</button>
      </div>
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
        <button onClick={() => handleFormRegister(username, password)}>
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
