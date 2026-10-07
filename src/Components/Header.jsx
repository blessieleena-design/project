import React from "react";
import { useState, useEffect} from "react"; 
// import Swiggy from "../assets/Swiggy.png"
// import { Link } from "react-router-dom";
import "./Header.css";
import placeData from "../data/placeData.json";
import eventData from "../data/eventData.json";
import { Link } from "react-router-dom";

function Header  () {
 const [selectedCategory, setSelectedCategory] = useState([]);
 const [selectedEvent, setSelectedEvent] = useState([]);

 useEffect(() => {
  const categories=placeData.map((item)=>item.category);
  
  const uniqueCategories = [...new Set(categories)];
  
  setSelectedCategory(uniqueCategories);
 }, []);  

 useEffect(() => {
  const eventNames = eventData.map((item) => item.name);
  setSelectedEvent(eventNames);
 }, []);

 console.log(selectedCategory)
 console.log(selectedEvent)

 return (
    <div className="header">
      <div className="logo">
        <h2>experience</h2>
        <h3>Kodaikanal</h3>
      </div>
      <nav>
        <div className="dropdown">
          <Link to ="/sightseeing">Things to do ▼</Link>
          {/* <button>Things to do▼</button> */}
          {/* <a href="#">Things to do<span className="arrow">▼</span></a> */}
          <div className="dropdown-content">
            {/* <a href="#">Sightseeing</a> */}
            {selectedCategory.map((category) => 
            <Link key={category} to={`/${category}`}> {category} 
            </Link>
            )}
         </div>
        </div>

        {/* <div className="dropdown">
          <Link to="/where-to-go">Where to go ▼</Link>
          <div className="dropdown-content">
            <Link to="/botanical-garden">Botanical garden</Link>
            <Link to="/pillar-rock">Pillar rock</Link>
          </div>
        </div> */}

        <div className="dropdown">
          <Link to="/events">Events▼</Link>
          <div className="dropdown-content">
             {selectedEvent.map((event) => 
            <Link key={event} to={`/events/${event}`}> {event} 
            </Link>
            )}
          </div>
        </div>
        
      </nav>
    
      {/* <p>Header data: 45</p>  */}
     </div>
  );
};
  

export default Header;

