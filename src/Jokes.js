import React from "react";

const Jokes = (props) => {
  return (
    <div>
      <h2>{props.setup}</h2>
      <h3>{props.punchLine}</h3>
      <p>{props.upVotes}</p>
      <p>{props.downVotes}</p>
      <p>{props.comments}</p>
      <hr />
    </div>
  );
};

export { Jokes };
