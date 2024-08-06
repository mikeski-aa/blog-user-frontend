import "../styles/BlogPost.css";
import { useState, useEffect } from "react";
import Comment from "./Comment";

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
  const [comments, setComments] = useState([]);
  const [commentVis, setCommentVis] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const result = await getCommentsForPost(props.id);
      setComments(result);
    };
    getComments();
  }, []);

  // toggle comment visibility
  const handleCommentShow = () => {
    setCommentVis(!commentVis);
    console.log(commentVis);
  };

  console.log(comments.length);

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
        <button>Add comment</button>
      </div>
    </>
  );
}

export default BlogPost;
