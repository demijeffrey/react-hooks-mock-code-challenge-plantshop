import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setInStock] = useState(true)

  function inStockClick() {
    setInStock(!inStock)
  } 
  function outOfStockClick() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* {true ? (
        <button className="primary" onClick={inStockClick}>In Stock</button>
      ) : (
        <button onClick={outOfStockClick}>Out of Stock</button>
      )} */}
      {inStock ? (
        <button className="primary" onClick={inStockClick}>In Stock</button>
      ) : (
        <button onClick={outOfStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
