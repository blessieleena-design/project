import React from "react";
import { Link, useParams } from "react-router";
import eventdata from "../data/eventData.json";
import "./events.css";

const Events = () => {
  const { name } = useParams();

  const selectedEvent = eventdata.filter(
    (item) => item.name === name
  );
  console.log(selectedEvent); 
  return (
    <div>
      <h1 className="title1">Events</h1>

      {selectedEvent.length > 0 ? (
        selectedEvent.map((event) => (
            <Link
                to={`/${name}/${event.id}`}
                key={event.id}
            >
        <div className="place-card">
          <img
            src={event.image}
            alt={event.name}
            width="300"
          />
          <h2>{event.name}</h2>
          <p>Name: {event.name}</p>
        </div>
        </Link>
        ))
      ) : (
        <div>
          {/* {placeData.map((place) => ( */}
            
            {/* //   to={`/${category }/${place.id}`}
            //   key={place.name} */}
            
              {/* <div className="place-card">
                <img
                  src={place.image}
                  alt={place.name}
                  width="200"
                />
                <h2>{place.name}</h2>
              </div> */}
            
          {/* ))} */}
        </div>
        )}
    </div>
  );
};

export default Events;