import Nav from "../components/Nav";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Logincheck from "../lib/Loginchecker";

function About() {
  return (
    <>
      <Nav></Nav>
      <div className="mainContent">
        <p>This is where the about page will go</p>
      </div>
    </>
  );
}

export default About;
