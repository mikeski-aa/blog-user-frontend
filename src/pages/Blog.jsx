import Nav from "../components/Nav";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Logincheck from "../lib/Loginchecker";

export const BlogContext = createContext();

function Blog() {
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
  }, []);
  return (
    <>
      <BlogContext.Provider
        value={{
          user,
          setUser,
          isLogged,
          setIsLogged,
        }}
      >
        <Nav></Nav>
        <div className="mainContent">
          <p>This is where the blog posts will go</p>
        </div>
      </BlogContext.Provider>
    </>
  );
}

export default Blog;
