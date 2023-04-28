import React from "react";

export default function Authentication(props) {
  function hancleClick() {
    if (window.opener !== undefined) {
      const urlParams = window.location.hash.substr(1).split("&");
      const tokenParam = urlParams[0].split("=");
      const accessToken = tokenParam[1];
      localStorage.setItem("accessToken", accessToken);
      window.close();
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
