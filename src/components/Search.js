import React from "react";

function Search({searchValue, setSearchValue}) {
  function searchChange(event) {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={searchChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
