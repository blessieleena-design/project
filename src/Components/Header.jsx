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
            <a href="#">Sightseeing</a>
            <a href="#">Nature & Parks</a>
          </div>
        </div>

        <div className="dropdown">
          <button>Where to go▼</button>
          <div className="dropdown-content">
            <a href="#">Botanical garden</a>
            <a href="#">Pillar rock</a>
          </div>
        </div>

        <div className="dropdown">
          <button>Events▼</button>
          <div className="dropdown-content">
            <a href="#">Music Festival</a>
            <a href="#">Food Festival</a>
          </div>
        </div>
        
      </nav>
    
      {/* <p>Header data: 45</p>  */}
     </div>

  );
}

export default Header;

