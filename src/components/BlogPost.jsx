import "../styles/BlogPost.css";
import { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import { AuthContext } from "../App";

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

function BlogPost(props) {
  const authContext = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [commentVis, setCommentVis] = useState(false);
  const [addCommentVis, setAddCommentVis] = useState(false);

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
        <button onClick={handleCommentShow}>
          View {comments.length} comments
        </button>
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
        <button className={`addBtnVis${addCommentVis}`}>Add comment</button>
      </div>
    </>
  );
}

export default BlogPost;
