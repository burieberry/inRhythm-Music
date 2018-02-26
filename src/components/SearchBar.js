import React from 'react';

const SearchBar = () => {
  return (
    <div id="search" className="col-xs-12">
      <input id="search-box" placeholder="Enter an artist name" autoFocus="true" />
      <button id="search-btn" className="btn btn-lg">Search</button>
    </div>
  )
};

export default SearchBar;
