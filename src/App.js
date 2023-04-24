import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import { getSearchResults } from "./logic/apiRequests";

const songs2 = [];

const songs3 = await getSearchResults("ariana grande");
console.log(songs3);

function App() {
  const [list1, setList1] = React.useState(songs3);
  const [list2, setList2] = React.useState(songs2);
  const [searchQuery, setSearchQuery] = React.useState("ariana grande");

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
    setSearchQuery(query);
    let newSongList = await getSearchResults(query);
    console.log(newSongList);
    setList1(newSongList);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar search={handleSearch} />
        <section className="song-columns">
          <SearchResults songs={list1} add={handleAdd} remove={handleRemove} />
          <Tracklist songs={list2} add={handleAdd} remove={handleRemove} />
          <Playlist />
        </section>
      </main>
    </div>
  );
}

export default App;
