import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function handleUserInput(e, setUsername) {
  console.log(e.target.value);
  setUsername(e.target.value);
}

function handlePasswordInput(e, setPassword) {
  console.log(e.target.value);
  setPassword(e.target.value);
}

async function handleFormSubmit(username, password) {
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

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => userTest()}>User test</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
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
        <button onClick={() => handleFormSubmit(username, password)}>
          Register
        </button>
      </form>
    </>
  );
}

export default App;
