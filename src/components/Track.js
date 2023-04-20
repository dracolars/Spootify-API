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
        <div
          onClick={() => props.add(props.title)}
          className="add track-buttons"
        ></div>
        <div
          onClick={() => props.remove(props.index)}
          className="remove track-buttons"
        ></div>
      </div>
    </li>
  );
}

export default Track;
