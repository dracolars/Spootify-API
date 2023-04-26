// this file contains the api calls for searching songs
// and to give an initial authorization for such seaches
// saving the playlist is saved under ./spotifySave

const SpotifySearch = {
  async getTokenData() {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}` +
          `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        //console.log(jsonResponse);
        return jsonResponse.access_token;
      }
      throw new Error("Token request failed");
    } catch (error) {
      console.log(error.message);
    }
  },

  async fetchWebApi(endpoint, method, body) {
    try {
      const res = await fetch(`${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const jsonResponse = await res.json();
        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error.message);
    }
  },

  async getSearchResults(query) {
    console.log("function getSearchResults() param: " + query);
    let songs = [];

    //define endpoint and query
    let endpoint = "https://api.spotify.com/v1/search?q=";
    let q = query.replace(" ", "%20");
    let constraints = "&type=track&limit=10";
    let fullEndpoint = endpoint + q + constraints;

    // fetchWebApi and await json response
    let response = await SpotifySearch.fetchWebApi(fullEndpoint, "GET");

    // if successful, then let's work with the json object, tracks.items (that contain the songs)
    let tracks = response.tracks.items;
    //console.log(tracks);

    // make json objects into our format to fit each <Track> by extracting id, name, artist(s) and album.
    songs = tracks.map((track) => {
      let TrackObject = {
        id: track.id,
        title: track.name,
        album: track.album.name,
        artist: [],
        image: track.album.images[2],
      };

      for (let i = 0; i < track.artists.length; i++) {
        TrackObject["artist"].push(track.artists[i].name);
      }
      TrackObject.artist = TrackObject.artist.join(", ");

      return TrackObject;
    });

    return songs;
  },
};

var token = await SpotifySearch.getTokenData();

export { SpotifySearch };
