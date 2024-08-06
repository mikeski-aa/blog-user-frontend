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
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [authState, setAuthState] = useState(false);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
