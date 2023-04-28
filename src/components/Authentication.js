import React from "react";
import Spotify from "../logic/spotifySave";

export default function Authentication(props) {
  function hancleClick() {
    if (window.opener !== undefined) {
      Spotify.setAccessToken();
    }
  }
  return (
    <main className="auth">
      <section className="auth">
        <p className="auth-p">
          Authentication complete. Please click the button below to
        </p>
        <button onClick={hancleClick} className="auth-button">
          Return to My Playlist
        </button>
      </section>
    </main>
  );
}
