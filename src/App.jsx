import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Logincheck from "./lib/Loginchecker";
import { useEffect } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState("false");

  // useeffect to handle checking if user is still logged in and setting appropriate states
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

  console.log("test");

  return (
    <>
      <LoginContext.Provider
        value={{
          user,
          setUser,
          isLogged,
          setIsLogged,
        }}
      >
        <Nav></Nav>
        <div className="mainCont">
          <p>Some info about the blog goes here, maybe picture</p>
        </div>
      </LoginContext.Provider>
    </>
  );
}

export default App;
