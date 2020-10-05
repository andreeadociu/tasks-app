import React from "react";
import { Link } from "react-router-dom";

const CardHeader = (props) => {
  const status = props.status;
  return (
    <div className="card-action">
      <span className="card-title">{props.title}</span>
      <Link to={`/edit/${props.id}`}>Edit</Link>
      <a
        className={status === "completed" ? "grey-text" : undefined}
        status={props.status}
        onClick={props.onCompletePress}
      >
        Complete
      </a>
    </div>
  );
};

export default CardHeader;
