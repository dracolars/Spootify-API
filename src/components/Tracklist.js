import React, { useState } from "react";
import Track from "./Track";
import SpotifySave from "../logic/spotifySave";
import spotifyLogo from "../assets/spotify-logo-green.png";

function Tracklist(props) {
  const [token, setToken] = useState(false);
  const [buttonVal, setButtonVal] = useState("Login to Save Playlist");
  const [playlistSave, setPlaylistSave] = useState(false);
  let playlistName = "";

  async function handleClick(e) {
    try {
      if (e.target.value === "Login to Save Playlist") {
        // login Spotify popup
        SpotifySave.getAccessToken();

        //check if token was saved periodically
        const id = setInterval(checkStorage, 2000);
        function checkStorage() {
          let accessToken = localStorage.getItem("sp-access-token");
          if (accessToken !== null && accessToken !== undefined) {
            setButtonVal("Save Playlist");
            setToken(accessToken);
            clearInterval(id);
          } else {
            console.log("token not set. " + accessToken);
          }
        }
        setInterval(() => {}, 2000);

        // if button was updated, save playlist
      } else if (e.target.value === "Save Playlist" && token) {
        console.log("saving playlist.....");

        playlistName = document.getElementById("playlist-name").value;
        let uris = props.songs.map((song) => song.uri);
        uris.join();
        console.log(playlistName);
        if (playlistName && uris) {
          let saveResponse = await SpotifySave.savePlaylist(playlistName, uris);
          if (saveResponse.ok) {
            console.log(saveResponse);
            setPlaylistSave(true);
          } else {
            console.log("access error, unable to save");
          }
        } else {
          console.log("missing playlist-name");
        }
      }
    } catch (error) {
      console.log(error.message);
      alert(
        "Error. The playlist cannot be saved because the author has not given you access to this app. Please contact: contact@alexdemos.net to request access."
      );
    }
  }

  function handleChange() {
    setButtonVal("Save Playlist");
  }

  function handleRestart() {
    setPlaylistSave(false);
    props.resetSongs([]);
    document.getElementById("playlist-name").value = "";
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
          onClick={handleClick}
          onChange={handleChange}
          id="tracklist-button"
          value={buttonVal}
          readOnly
        />
      )}
      {playlistSave && (
        <aside className="save-success">
          <div className="success-message">
            <p>Your playlist has been saved to</p>
            <img id="spotify-logo" src={spotifyLogo} alt="spotify logo" />
            <button onClick={handleRestart}>Start New</button>
          </div>
        </aside>
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
