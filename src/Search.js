import React from "react";

const Search = ({ searchText, setSearchText }) => {
  return (
    <div style={{ marginLeft: "25px" }}>
      <label htmlFor="search">Search</label>
      <br />
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={setSearchText}
        value={searchText}
      ></input>
    </div>
  );
};

export default Search;
