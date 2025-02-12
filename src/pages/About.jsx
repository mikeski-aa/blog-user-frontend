import Nav from "../components/Nav";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Logincheck from "../lib/Loginchecker";
import { AuthContext } from "../App";

function About() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    async function doThis() {
      const result = await Logincheck();
      if (result) {
        authContext.setAuthState(true);
        authContext.setCurrentUser(result.name);
      }
    }

    doThis();
  }, []);
  return (
    <>
      <Nav></Nav>
      <div className="mainContent">
        <div>
          <p>This is where the about page will go</p>
        </div>
      </div>
    </>
  );
}

export default About;
