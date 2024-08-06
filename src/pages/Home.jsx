import { useContext } from "react";
import Nav from "../components/Nav";
import { TestContext } from "../Test";

function Home() {
  const testContext = useContext(TestContext);

  console.log(testContext.stateTest);
  return (
    <>
      <Nav />
      <p>Home loaded</p>
    </>
  );
}

export default Home;
