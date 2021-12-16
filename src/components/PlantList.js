import React from "react";
import PlantCard from "./PlantCard";

function PlantList({listings}) {
  const displayListing =listings.map((listing)=>{
    return <PlantCard key={listing.id} listing={listing}/>
  })
  return (
    <ul className="cards">{displayListing}</ul>
  );
}

export default PlantList;
