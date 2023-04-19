import React from "react";

function Track(props) {
  return (
    <li className="track">
      <div className="title-container">
        <p className="title">{props.title}</p>
        <p className="artist">{props.artist}</p>
        <p className="album">{props.album}</p>
      </div>
      <div className="button-container">
        <div className="add"></div>
      </div>
    </li>
  );
}

export default Track;
