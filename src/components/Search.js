import React from "react";

function Search({ search, setSearch }) {

  // function handleSearch (updatedPlant){
  //   e.preventDefault();
  //   const newArray = listings.map((plant)=>{
  //     if(plant.id === updatedPlant)
  //   })
  // }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
