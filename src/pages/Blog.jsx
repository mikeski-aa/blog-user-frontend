import Nav from "../components/Nav";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Logincheck from "../lib/Loginchecker";
import { AuthContext } from "../App";

async function fetchBlogposts() {
  const url = "http://localhost:3000/posts";
  try {
    const response = await fetch(url, { method: "GET" });
    const json = await response.json();
    console.log(json.posts);
    return json.posts;
  } catch (error) {
    console.log(error);
  }
}

function Blog() {
  // i need to call the get API for blog posts
  const authContext = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isLogged, setIsLogged] = useState("false");

  useEffect(() => {
    const getPosts = async () => {
      let result = await fetchBlogposts();
      setPosts(result);
    };

    getPosts();
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="mainContent">
        <p>This is where the blog posts will go</p>
        <div className="blogposts">
          {posts.map((post) => (
            <p>{post.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
