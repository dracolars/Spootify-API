import React from "react";
import Track from "./Track";

function SearchResults(props) {
  const songs = props.songs;

  return (
    <div className="search-results">
      <h3>Results</h3>
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

export default SearchResults;
