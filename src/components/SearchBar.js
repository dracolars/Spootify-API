import React from "react";

function SearchBar(props) {
  function handleClick() {
    let queryElement = document.getElementById("search");
    let query = queryElement.value;
    props.search(query);
    console.log(queryElement);
    console.log(query);
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
      <input type="text" className="search-bar" name="search" id="search" />
      <input type="button" value="submit" onClick={handleClick} />
    </form>
  );
}

export default SearchBar;
