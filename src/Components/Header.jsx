import React from "react";
// import Swiggy from "../assets/Swiggy.png"
// import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h2>experience</h2>
        <h3>Kodaikanal</h3>
      </div>
      <nav>
        <div className="dropdown">
          <button>Things to do▼</button>
          {/* <a href="#">Things to do<span className="arrow">▼</span></a> */}
          <div className="dropdown-content">
            {/* <a href="#">Sightseeing</a> */}
            <a href="https://www.escape2explore.com/blog/attraction/kodaikanal-lake/902">Sightseeing</a>
            <a href="https://www.escape2explore.com/article/places-to-visit-in-kodaikanal/91">Nature & Parks</a>
          <button onclick="ThingsToDo()"></button>
          </div>
        </div>

        <div className="dropdown">
          <button>Where to go▼</button>
          <div className="dropdown-content">
            <a href="https://www.justdial.com/Kodaikanal/Botanical-Gardens/nct-12004083">Botanical garden</a>
            <a href="https://www.escape2explore.com/blog/attraction/pillar-rocks-best-time-to-visit-mustsee-highlights/40">Pillar rock</a>
          </div>
        </div>

        <div className="dropdown">
          <button>Events▼</button>
          <div className="dropdown-content">
            <a href="https://www.kodaikanaltoday.com/en/events/kodaikanal-summer-festival">Music Festival</a>
            <a href="https://trippyigloo.com/destination/food-culture-and-festivals-of-kodaikanal">Food Festival</a>
          </div>
        </div>
        
      </nav>
    
      {/* <p>Header data: 45</p>  */}
     </div>

  );
}

export default Header;

