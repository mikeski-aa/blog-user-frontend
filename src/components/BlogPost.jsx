import "../styles/BlogPost.css";
import { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import { AuthContext } from "../App";
import Logincheck from "../lib/Loginchecker";

// display individual blogpost  in a specific way

async function getCommentsForPost(id) {
  try {
    const url = `http://localhost:3000/comments/${id}`;
    const response = await fetch(url, { method: "GET" });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

// comment post
async function postComment(text, postid) {
  console.log(postid);
  try {
    const newBody = {
      comment: text,
      postId: postid,
    };

    const url = `http://localhost:3000/comments/new`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(newBody),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return (window.location.href = "/blog");
  } catch (error) {
    console.log(error);
  }
}

function BlogPost(props) {
  const authContext = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [commentVis, setCommentVis] = useState(false);
  const [addCommentVis, setAddCommentVis] = useState(false);
  const [commentBoxVis, setCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");

  // setting comment state
  useEffect(() => {
    const getComments = async () => {
      const result = await getCommentsForPost(props.id);
      setComments(result);
    };
    getComments();
  }, []);

  // set new comment visibility state
  useEffect(() => {
    if (authContext.authState === false) {
      setAddCommentVis(false);
    } else {
      setAddCommentVis(true);
    }
  }, []);
  // toggle comment visibility
  const handleCommentShow = () => {
    setCommentVis(!commentVis);
  };

  // toggle new comment box
  const handleCommentBox = () => {
    setCommentBox(!commentBoxVis);
  };

  // handle type text change]
  const handleTextType = (e) => {
    setCommentText(e.target.value);
    console.log(e.target.value);
    console.log(commentText);
  };

  return (
    <>
      <div className="blogPost">
        <div className="postHeader">
          <h3>{props.title}</h3>
          <p>Date of publish: {props.date}</p>
        </div>
        <div className="postBody">
          <p>{props.text}</p>
          <p>Author: {props.user}</p>
        </div>
        <div className="blogButtons">
          <button onClick={handleCommentShow}>
            View {comments.length} comments
          </button>
          <button
            className={`addBtnVis${addCommentVis}`}
            onClick={handleCommentBox}
          >
            Add comment
          </button>
        </div>
        <div className={`newComment${commentBoxVis}`}>
          <textarea
            name="userComment"
            onChange={(e) => handleTextType(e)}
          ></textarea>
          <button
            className="commentSubmit"
            onClick={() => postComment(commentText, props.id)}
          >
            Submit new comment
          </button>
        </div>

        <div className={`commentVis${commentVis}`}>
          {comments.map((comment) => (
            <Comment
              date={comment.date}
              author={comment.user.username}
              text={comment.text}
              key={comment.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPost;
