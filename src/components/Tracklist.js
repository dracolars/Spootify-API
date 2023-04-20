import React from "react";
import Track from "./Track";

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
              remove={props.remove}
              add={props.add}
            />
          );
        })}
      </ul>
      {props.songs.length > 0 && <button>Create Playlist</button>}
    </div>
  );
}

export default Tracklist;
