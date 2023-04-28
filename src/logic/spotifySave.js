const clientID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = "http://localhost:3000/auth";

console.log(clientID);

const Spotify = {
  accessToken: null,

  getAccessToken() {
    if (!localStorage.getItem("sp-access-token")) {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
      window.open(accessURL, "Login with Spotify", "width=600,height=700");
    } else {
      return localStorage.getItem("sp-access-token");
    }
  },

  setAccessToken() {
    const urlParams = window.location.hash.substr(1).split("&");
    const tokenParamArr = urlParams[0].split("=");
    const accessToken = tokenParamArr[1];
    this.accessToken = accessToken;
    localStorage.setItem("sp-access-token", accessToken);
    console.log(this.accessToken);
    window.close();
  },

  search(searchTerm) {
    this.accessToken = Spotify.getAccessToken();
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${this.searchTerm}`,
      {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }

        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artists: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  async savePlaylist(name, uRIs) {
    if (!name || !uRIs.length) {
      return -1;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    // Get userid
    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        // Create PlayList and return id for playList
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistID = jsonResponse.id;
            // Add tracks to playList
            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: uRIs }),
              }
            );
          });
      });
  },
};

export default Spotify;
