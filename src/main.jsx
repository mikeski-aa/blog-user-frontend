import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./pages/Register.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Test from "./Test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
