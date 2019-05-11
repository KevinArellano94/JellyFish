import React from "react";
import YouTube from "react-youtube";

const opts = {
  height: "200",
  width: "200",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

function Music(props) {
  return (
    <div>
      {/* <YouTube videoId={props.videoId} opts={opts} onReady={props.onReady} /> */}
      <YouTube videoId={props.videoId} opts={opts} onReady={props.onReady} />
    </div>
  );
}

export default Music;
