import React from "react";
import CardHeader from "./CardHeader";

const Card = (props) => {
  return (
    <div data-testid="card">
      <div className="col s12 m6 l3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <CardHeader
              title={props.title}
              id={props.id}
              onCompletePress={props.onComplete}
              status={props.status}
            />
            <p>{props.content}</p>
            <p className="status">Status: {props.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
