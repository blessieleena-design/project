import React from "react";
// import Swiggy from "../assets/Swiggy.png"
// import { Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
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
            <Link to="/sightseeing">Sightseeing</Link>
            <Link to="/nature-parks">Nature & Parks</Link>
          <button onclick="ThingsToDo()"></button>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/where-to-go">Where to go ▼</Link>
          <div className="dropdown-content">
            <Link to="/botanical-garden">Botanical garden</Link>
            <Link to="/pillar-rock">Pillar rock</Link>
          </div>
        </div>

        <div className="dropdown">
          <button>Events▼</button>
          <div className="dropdown-content">
            <Link to="/music-festival">Music Festival</Link>
            <Link to="/food-festival">Food Festival</Link>
          </div>
        </div>
        
      </nav>
    
      {/* <p>Header data: 45</p>  */}
     </div>

  );
}

export default Header;

