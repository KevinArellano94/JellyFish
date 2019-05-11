import React from "react";
//import YouTube from "react-youtube";

function MusicList(props) {
  return (
    <div className="list-group">
      <button
        type="button"
        className="btn btn-dark"
        onClick={props.onClickFunction}
      >
        {props.videoName}
      </button>
    </div>
  );
}

export default MusicList;
