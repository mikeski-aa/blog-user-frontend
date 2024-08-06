import "../styles/BlogPost.css";

// display individual bogpost in a specific way

function BlogPost(props) {
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
      </div>
    </>
  );
}

export default BlogPost;
