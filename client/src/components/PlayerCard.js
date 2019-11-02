import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Country: {props.country}</h3>
      <p>Google searches:{props.searches}</p>
    </div>
  )
}

export default PlayerCard;

