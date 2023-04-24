import React from "react";

function Track(props) {
  return (
    <li className="track">
      <div className="cover-container">
        <img src={props.image.url} alt={props.title + "cover art"} />
      </div>
      <div className="title-container">
        <p>
          <span className="title">{props.title}</span>
          <span className="artist">{props.artist}</span>
          <span className="artist-album-separator"> &#9679; </span>
          <span className="album">{props.album}</span>
        </p>
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
