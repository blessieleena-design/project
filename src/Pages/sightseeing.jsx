import React from "react";
import { Link, useParams } from "react-router";
import placeData from "../data/placeData.json";
import "./sightseeing.css";

const Sightseeing = () => {
  const { category } = useParams();

  const selectedPlace = placeData.filter(
    (item) => item.category === category
  );
  console.log(selectedPlace); 
  return (
    <div>
      <h1 className="title">Things to do</h1>

      {selectedPlace.length > 0 ? (
        selectedPlace.map((place) => (
            <Link
                to={`/${category}/${place.id}`}
                key={place.id}
            >
        <div className="place-card">
          <img
            src={place.image}
            alt={place.name}
            width="300"
          />
          <h2>{place.name}</h2>
          <p>Category: {place.category}</p>
        </div>
        </Link>
        ))
      ) : (
        <div>
          {/* {placeData.map((place) => (
            <Link
              to={`/${category }/${place.id}`}
              key={place.name}
            >
              <div className="place-card">
                <img
                  src={place.image}
                  alt={place.name}
                  width="200"
                />
                <h2>{place.name}</h2>
              </div>
            </Link>
          ))} */}
        </div>
        )}
    </div>
  );
};

export default Sightseeing;