import React from "react";

function Search({ searchTerm, handleSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => handleSearchTerm(event)}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
