import React from "react";

const Travel = ({ image , destination , country, distance }) => (
  <figure>
    <img src={image} alt={destination} />
    <figcaption>
      <h2>{destination}</h2>
      <h3>{country}</h3>
      <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;
