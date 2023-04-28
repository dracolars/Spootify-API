import React, { useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import Tracklist from "./Tracklist";
import { SpotifySearch } from "../logic/spotifySearch";

function Main() {
  const [list1, setList1] = React.useState([]);
  useEffect(() => {
    async function getInitialSongs() {
      let initialSongs = await SpotifySearch.getSearchResults("ariana grande");
      setList1(initialSongs);
      console.log(initialSongs);
    }
    getInitialSongs();
  }, []);

  const [list2, setList2] = React.useState([]);

  function handleRemove(index) {
    console.log("removing index " + index + " from list " + 2);
    let newList = list2.slice();
    newList.splice(index, 1);
    setList2(newList);
  }

  function handleAdd(songname) {
    console.log("adding " + songname);
    let newSong = list1.filter((song) => song.title === songname);
    let newSongObject = {
      title: newSong[0]["title"],
      artist: newSong[0]["artist"],
      album: newSong[0]["album"],
      image: newSong[0]["image"],
    };
    let newList2 = list2.slice();
    newList2.push(newSongObject);
    setList2(newList2);
  }

  async function handleSearch(query) {
    let newSongList = await SpotifySearch.getSearchResults(query);
    console.log(newSongList);
    setList1(newSongList);
  }

  if (list1.length === 0) {
    return (
      <div className="loading-div">
        <p className="loading-p">Loading spotify search engine...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchBar search={handleSearch} />
          <section className="song-columns">
            <SearchResults
              songs={list1}
              add={handleAdd}
              remove={handleRemove}
            />
            <Tracklist songs={list2} add={handleAdd} remove={handleRemove} />
            <Playlist />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
