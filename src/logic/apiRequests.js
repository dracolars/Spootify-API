const token =
  "BQAnB0y6Z-ZBMHdzmaMihd7j7Cy3R899kn8nKsAieI0uI2Gp1lYwwBEp0yQ82HtwPAUJmvFRjcKHW8wSIYWduVIPr1g2brM1PABA_IvR7KpEdrUu_oKDtTrbrbpvDw6QEPZrD9DahNRm_84BbsUX4YyG2GUKWsXzq6r0VrdGpUxvGw1R6iGEX549bDsLnP1wWCzvO7kYDSQhYQIZxP6TdYhFZd9lYno2L8itN2DdafzFQPJnHMtynRhMT_Kic3VYxmBjuOeHBQDccxXYr9-Hg6yKMkY3RQ2GdpeJaL6443KWmp2MjUl8GpM2uOvNz0R0z3VDy0svYmQwRTq3_CJkaMVdeelT";
async function fetchWebApi(endpoint, method, body) {
  try {
    const res = await fetch(`${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error.message);
  }
}

let songs;

async function getSearchResults(query) {
  //define endpoint and query
  let endpoint = "https://api.spotify.com/v1/search?q=";
  let q = query.replace(" ", "%20");
  let constraints = "&type=track&limit=10";
  let fullEndpoint = endpoint + q + constraints;

  // fetchWebApi and await json response
  let response = await fetchWebApi(fullEndpoint, "GET");

  // if successful, then let's work with the json object, tracks.items (that contain the songs)
  let tracks = response.tracks.items;

  // make json objects into our format to fit each <Track> by extracting id, name, artist(s) and album.
  songs = tracks.map((track) => {
    let TrackObject = {
      id: track.id,
      title: track.name,
      album: track.album.name,
      artist: [],
    };

    for (let i = 0; i < track.artists.length; i++) {
      TrackObject["artist"].push(track.artists[i].name);
    }
    TrackObject.artist = TrackObject.artist.join(", ");

    return TrackObject;
  });

  console.log(songs);
}

export { getSearchResults, songs };
