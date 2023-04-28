import React, { useState } from "react";
import Track from "./Track";
import SpotifySave from "../logic/spotifySave";

function Tracklist(props) {
  // const [token, setToken] = useState(null);
  const [buttonVal, setButtonVal] = useState("Login to Save Playlist");

  function handleClick(e) {
    if (e.target.value === "Login to Save Playlist") {
      SpotifySave.getAccessToken();
      setButtonVal("Save Playlist");
    } else if (e.target.value === "Save Playlist") {
      console.log("saving playlist.....");
      setButtonVal("Save Playlist");
    }
  }

  return (
    <div className="tracklist">
      <h3>Playlist</h3>
      <input
        type="text"
        name="playlist-name"
        className="playlist-name"
        placeholder="playlist-name"
        id="playlist-name"
        required
      />
      {props.songs.length > 0 && (
        <input
          type="button"
          onClick={handleClick}
          id="tracklist-button"
          value={buttonVal}
        />
      )}
      <ul>
        {props.songs.map((song, index) => {
          return (
            <Track
              songs={props.songs}
              key={"key_" + index}
              index={index}
              title={song.title}
              artist={song.artist}
              album={song.album}
              image={song.image}
              remove={props.remove}
              add={props.add}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Tracklist;
