import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { AuthContext } from "../App";
import Logincheck from "../lib/Loginchecker";

function Home() {
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
      <Nav />
      <div className="mainContent">
        <p>Welcome to my blog!</p>
      </div>
    </>
  );
}

export default Home;
