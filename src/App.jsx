import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Logincheck from "./lib/Loginchecker";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState("false");

  return (
    <>
      {/* <Nav></Nav> */}
      <div className="mainCont">
        <p>Some info about the blog goes here, maybe picture</p>
      </div>
    </>
  );
}

export default App;
