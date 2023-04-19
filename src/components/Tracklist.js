import React from "react";
import Track from "./Track";

function Tracklist(props) {
  let songs = props.songs;
  return (
    <div className="tracklist">
      <h3>Playlist</h3>
      <input
        type="text"
        name="playlist-name"
        class="playlist-name"
        placeholder="playlist-name"
        id="playlist-name"
      />
      <ul>
        {songs.map((song, i) => {
          return (
            <Track
              key={"key_" + i}
              title={song.title}
              artist={song.artist}
              album={song.album}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Tracklist;
