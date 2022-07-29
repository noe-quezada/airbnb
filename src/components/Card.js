import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }


  return (
    <div className="card">
      {badgeText !== undefined && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" alt="" />
      <div className="card--stats">
        <img src="images/Star 1.png" className="card--star" alt="" />
        <span>{props.stats.rating}</span>
        <span className="gray">{"(" + props.stats.reviewCount + ")•"}</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export { Card };
