import React from "react";

function SearchBar(props) {
  function handleClick() {
    let queryElement = document.getElementById("search");
    let query = queryElement.value;
    if (query !== "") {
      props.search(query);
      console.log(query);
    }
  }

  return (
    <form
      action="#"
      id="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <input
        type="text"
        className="search-bar"
        name="search"
        id="search"
        placeholder="search song"
        required
      />
      <input
        className="search-button"
        type="button"
        value="search"
        onClick={handleClick}
      />
    </form>
  );
}

export default SearchBar;
