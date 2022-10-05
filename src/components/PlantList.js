import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  let plantsToDisplay = plants
  .filterplantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  .map(plant => <PlantCard plant={plant} key={plant.id} />)

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
