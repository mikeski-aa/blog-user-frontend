import Nav from "../components/Nav";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Logincheck from "../lib/Loginchecker";
import { AuthContext } from "../App";
import BlogPost from "../components/BlogPost";
import dateConvert from "../lib/Datehelper";

async function fetchBlogposts() {
  const url = "http://localhost:3000/posts";
  try {
    const response = await fetch(url, { method: "GET" });
    const json = await response.json();
    console.log("json from promise");
    console.log(json);
    return json.posts;
  } catch (error) {
    console.log(error);
  }
}

function Blog() {
  // i need to call the get API for blog posts
  const authContext = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  console.log("check auth state");
  console.log(authContext.authState);

  useEffect(() => {
    async function checkAuth() {
      try {
        const result = await Logincheck();
        if (result) {
          authContext.setAuthState(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkAuth();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      let result = await fetchBlogposts();
      console.log(result);
      setPosts(result);
    };

    getPosts();
  }, []);

  console.log(posts);

  if (typeof posts === "undefined") {
    return (
      <>
        <Nav></Nav>
        <div className="mainContent">
          <p>This is where the blog posts will go</p>
          <div className="blogposts">No posts were found</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav></Nav>
      <div className="mainContent">
        <p>This is where the blog posts will go</p>
        <div className="blogposts">
          {posts.map((post) => (
            <BlogPost
              title={post.title}
              user={post.user.username}
              date={dateConvert(post.date)}
              text={post.text}
              id={post.id}
              key={post.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
