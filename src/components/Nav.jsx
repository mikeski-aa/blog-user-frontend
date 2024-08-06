import { Link } from "react-router-dom";
import Logincheck from "../lib/Loginchecker";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState("false");
  const [isLoading, setIsLoading] = useState("true");

  // useeffect to handle checking if user is still logged in and setting appropriate states
  // useEffect(() => {
  //   const logcheck = async () => {
  //     try {
  //       const result = await Logincheck();

  //       if (typeof result === "undefined") {
  //         setIsLogged(false);
  //         setIsLoading(false);
  //       }

  //       if (result.login === true) {
  //         setUser(result.name);
  //         setIsLogged(true);
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log(error);
  //     }
  //   };

  //   logcheck();
  // }, []);

  const handleLogout = () => {
    console.log("logout clicked");
    localStorage.removeItem("token");
  };

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className="navBar">
  //         <Link to="/">
  //           <button>Home</button>
  //         </Link>
  //         <Link to="/blog">
  //           <button>Blog</button>
  //         </Link>
  //         <Link to="/about">
  //           <button>About</button>
  //         </Link>
  //         <button onClick={handleLogout}>Logout</button>
  //       </div>
  //     </>
  //   );
  // }

  // if (typeof isLogged != "undefined") {
  //   if (isLogged == true) {
  //     return (
  //       <>
  //         <div className="navBar">
  //           <Link to="/">
  //             <button>Home</button>
  //           </Link>
  //           <Link to="/blog">
  //             <button>Blog</button>
  //           </Link>
  //           <Link to="/about">
  //             <button>About</button>
  //           </Link>
  //           <button onClick={handleLogout}>Logout</button>
  //         </div>
  //       </>
  //     );
  //   }
  // }

  return (
    <>
      <div className="navBar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/blog">
          <button>Blog</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </>
  );
}

export default Nav;
