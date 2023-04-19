import React from "react";

function SearchBar(props) {
  return (
    <form action="#">
      <input type="text" className="search-bar" name="search" id="search" />
      <input type="submit" value="submit" />
    </form>
  );
}

export default SearchBar;
