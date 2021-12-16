import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then((r)=> r.json())
    .then ((listings)=> setListings(listings))
  },[])

  function handleAddPlant(newPlant){
    const newPlantArray = [...listings, newPlant];
    setListings(newPlantArray)
  }

  const filterPlantsArray = listings.filter((listing)=>{
  return listing.name.toLowerCase().includes(search.toLowerCase())
  }) 

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList listings={filterPlantsArray}/>
    </main>
  );
}

export default PlantPage;
