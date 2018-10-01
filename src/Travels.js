import React from "react";
import Travel from "./Travel"
// src/Travels.js
const travels = [
  {
    image: "http://braindamaged.fr/wp-content/uploads/2016/12/les-sand-snakes-%C3%A0-Kings-Landing-image-une-game-of-thrones-saison-7-631x250.jpg",
    destination: "Port Réal",
    country: "Westeros",
    distance: "4 300 km"
  },
  {
    image: "http://www.inchiostrovirtuale.it/wp-content/uploads/2017/07/La-Barriera-GoT-860x484.png",
    destination: "Le Mur",
    country: "Westeros",
    distance: "10 399 km"
  },  {
    image: "https://medias.spotern.com/spots/w640/75648-1532336916.jpg",
    destination: "Winterfell",
    country: "Westeros",
    distance: "8 799 km"
  },  {
    image: "http://ekladata.com/5Xnmz655ppxzqZ67mjX8ZxEDCe4.jpg",
    destination: "Dorne",
    country: "Westeros",
    distance: "6 799 km"
  },  {
    image: "http://braindamaged.fr/wp-content/uploads/2016/07/Castillo_de_Almodo%CC%81var_del_Ri%CC%81o-2009-631x250.jpg",
    destination: "Hautjardin",
    country: "Westeros",
    distance: "7 984 km"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel image={travel.image} destination={travel.destination} country={travel.country} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;