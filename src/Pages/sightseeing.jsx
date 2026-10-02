import React from "react";
import { Link, useParams } from "react-router";
import placeData from "../data/placeData.json";
import "./sightseeing.css";

const Sightseeing = () => {
  const { category } = useParams();

  const selectedPlace = placeData.find(
    (item) => item.id === Number(category)
  );

  return (
    <div>
      <h1 className="title">Things to do</h1>

      {selectedPlace ? (
        <div className="place-card">
          <img
            src={selectedPlace.image}
            alt={selectedPlace.name}
            width="300"
          />
          <h2>{selectedPlace.name}</h2>
          <p>Category: {selectedPlace.category}</p>
        </div>
      ) : (
        <div>
          {placeData.map((place) => (
            <Link
              to={`/${category }/${place.id}`}
              key={place.id}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Sightseeing;