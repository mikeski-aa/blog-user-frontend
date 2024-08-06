import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { createContext, useState, useEffect } from "react";
import Logincheck from "./lib/Loginchecker";
import "./App.css";

export const AuthContext = createContext();

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

function App() {
  const [stateTest, setStateTest] = useState(false);

  return (
    <AuthContext.Provider value={{ stateTest, setStateTest }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
