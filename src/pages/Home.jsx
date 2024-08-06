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
        authContext.setStateTest(true);
      }
    }

    doThis();
  }, []);

  console.log(authContext.stateTest);
  return (
    <>
      <Nav />
      <p>Welcome to my blog!</p>
    </>
  );
}

export default Home;
