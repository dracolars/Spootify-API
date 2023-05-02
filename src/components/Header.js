import React from "react";

const Header = () => {
  return (
    <header>
      <div id="alert-banner">
        <b>ATTN:</b> The current version will not save playlists for
        <b> unregistered users.</b> Please{" "}
        <a href="mailto:contact@alexdemos.net">contact author</a> to register
        your account with Spotify's API.
      </div>
      <h1>Spootify</h1>
      <h2>create spotify playlists in seconds</h2>
    </header>
  );
};

export default Header;
