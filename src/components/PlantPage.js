import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  function addNewPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
