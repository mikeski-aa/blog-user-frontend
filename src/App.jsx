import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Nav></Nav>
      <div className="mainCont">
        <p>Some info about the blog goes here, maybe picture</p>
      </div>
    </>
  );
}

export default App;
