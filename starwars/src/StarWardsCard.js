import React from "react";
import App from "./App"
function StarWardsCard(props) {
  const {photo} = props;
  console.log(props)
  return (
    <div>
      <h2>{photo.name}</h2>
      <p> Model: {photo.model}</p>
      <p> Manufacturer: {photo.manufacturer}</p>
      <p> Length: {photo.length} </p>
      <p> Max Atmospheering Speed: {photo.max_atmosphering_speed}</p>
      <p>Crew:  {photo.crew} </p>
      <p> Passengers: {photo.passengers} </p>
      <p> Cargo Capapcity: {photo.cargo_capacity}</p>

      <p> Consumables: {photo.consumables}</p>
      <p> HyperDrive Rating: {photo.hyperdrive_rating}</p>
      <p> MGLT: {photo.MGLT} </p>
      <p> StarShip Class: {photo.starship_class}</p>
      
    </div>
  );
}

export default StarWardsCard;