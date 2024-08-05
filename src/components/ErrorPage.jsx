import { Link } from "react-router-dom";
import Nav from "./Nav";

function ErrorPage() {
  return (
    <>
      <Nav></Nav>
      <h2>Oh no, an error!</h2>
      <p>This page was not found</p>
    </>
  );
}

export default ErrorPage;
