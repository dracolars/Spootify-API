import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";

const songs = [
  { title: "Into You", artist: "Ariana Grande", album: "Dangerous Woman" },
  { title: "'this the damn season", artist: "Taylor Swift", album: "evermore" },
  { title: "Delicate", artist: "Taylor Swift", album: "reputation" },
  {
    title: "Violet Chemistry",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
  },
  { title: "Mienteme", artist: "TINI", album: "Cupido" },
  { title: "TQG", artist: "Karol G, Shakira", album: "Mañana Será Bonito" },
  { title: "Blind", artist: "SZA", album: "SOS" },
  { title: "Bejeweled", artist: "Taylor Swift", album: "Midnights" },
  { title: "10/10", artist: "Troye Sivan", album: "In A Dream" },
  { title: "positions", artist: "Ariana Grande", album: "Positions" },
];

const songs2 = [
  { title: "Into You", artist: "Ariana Grande", album: "Dangerous Woman" },
  { title: "'this the damn season", artist: "Taylor Swift", album: "evermore" },
  { title: "Delicate", artist: "Taylor Swift", album: "reputation" },
  { title: "positions", artist: "Ariana Grande", album: "Positions" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
        <section className="song-columns">
          <SearchResults songs={songs} />
          <Tracklist songs={songs2} />
          <Playlist />
        </section>
      </main>
    </div>
  );
}

export default App;
