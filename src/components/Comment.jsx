import dateConvert from "../lib/Datehelper";

function Comment(props) {
  // not really prop drilling but im not a fan of passing props again down to comments (despite it being different data)
  return (
    <div className="commentContainer">
      <div className="commentBody">{props.text}</div>
      <div className="commentFooter">
        <p>Comment by: {props.author}</p>
        <p>{dateConvert(props.date)}</p>
      </div>
    </div>
  );
}

export default Comment;
