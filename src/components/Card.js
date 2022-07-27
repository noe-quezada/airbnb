import React from "react";

const Card = () => {
  return (
    <div className="cards">
      <img className="cards--person" src="images/image 12.png" alt="" />
      <div className="cards--info">
        <img className="cards--star" src="images/Star 1.png" alt="" />
        <p>5.0</p>
        <p className="cards--place">(6) - USA</p>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p className="cards--prices">From $136</p>
      <p className="cards--person--word"> / person</p>
    </div>
  );
};

export { Card };
