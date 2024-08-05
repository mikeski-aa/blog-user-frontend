import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dd from "./Dd";
import ErrorPage from "./components/ErrorPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dd />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/blog",
  //     element: <Blog />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
]);

function Test() {
  return <RouterProvider router={router} />;
}

export default Test;
