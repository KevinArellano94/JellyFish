import React from "react";

function AboutPage(props) {
  return (
    <div className="container">
      <div className="AboutPage">
        <h2>{props.name}</h2>
        <h2>About || JellyFish</h2>
        <p>To be continued...</p>
      </div>
    </div>
  );
}

export default AboutPage;
