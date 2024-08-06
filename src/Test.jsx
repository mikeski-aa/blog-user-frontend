import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { createContext, useState, useEffect } from "react";
import Logincheck from "./lib/Loginchecker";

export const TestContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function Test() {
  const [stateTest, setStateTest] = useState(false);
  useEffect(() => {
    async function doThis() {
      const result = await Logincheck();
      console.log(result);
    }

    doThis();
  });

  return (
    <TestContext.Provider value={{ stateTest, setStateTest }}>
      <RouterProvider router={router} />
    </TestContext.Provider>
  );
}

export default Test;
