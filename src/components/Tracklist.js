import React from "react";
import Track from "./Track";
import SpotifySave from "../logic/spotifySave";

function Tracklist(props) {
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
        <button onClick={SpotifySave.getAccessToken}>Create Playlist</button>
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
