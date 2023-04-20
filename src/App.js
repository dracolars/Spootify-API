import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";

const songs = [
  {
    title: "Into You",
    artist: "Ariana Grande",
    album: "Dangerous Woman",
  },
  {
    title: "'tis the damn season",
    artist: "Taylor Swift",
    album: "evermore",
  },
  {
    title: "Delicate",
    artist: "Taylor Swift",
    album: "reputation",
  },
  {
    title: "Violet Chemistry",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
  },
  { title: "Mienteme", artist: "TINI", album: "Cupido" },
  {
    title: "TQG",
    artist: "Karol G, Shakira",
    album: "Mañana Será Bonito",
  },
  { title: "Blind", artist: "SZA", album: "SOS" },
  {
    title: "Bejeweled",
    artist: "Taylor Swift",
    album: "Midnights",
  },
  { title: "10/10", artist: "Troye Sivan", album: "In A Dream" },
  {
    title: "positions",
    artist: "Ariana Grande",
    album: "Positions",
  },
];

const songs2 = [];

function App() {
  const [list1] = React.useState(songs);
  const [list2, setList2] = React.useState(songs2);

  function handleRemove(index) {
    console.log("removing " + index + "from list " + 2);

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
    };
    let newList2 = list2.slice();
    newList2.push(newSongObject);
    setList2(newList2);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
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
