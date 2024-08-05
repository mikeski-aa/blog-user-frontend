import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Logincheck from "./lib/Loginchecker";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState("false");

  useEffect(() => {
    const logcheck = async () => {
      const result = await Logincheck();
      console.log(result);
      if (result.login === true) {
        setUser(result.name);
        setIsLogged(true);
      }
    };

    logcheck();
  });
  // here we will have all the click handlers

  console.log("test");

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
