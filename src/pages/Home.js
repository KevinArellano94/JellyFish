import React from "react";

function HomePage(props) {
  return (
    <div className="container">
      <div className="HomePage">
        <h2>{props.name}</h2>
        <h2>JellyFish</h2>
        <p>
          This is my persoanl website where I'll include stuff for stuffing...
        </p>
      </div>
    </div>
  );
}

export default HomePage;
