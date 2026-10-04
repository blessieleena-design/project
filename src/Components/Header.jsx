import React, { useState, useEffect } from "react";
import "./Header.css";
import placeData from "../data/placeData.json";
import { Link } from "react-router-dom";

function Header() {
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    const categories = placeData.map((item) => item.category);

    const uniqueCategories = [...new Set(categories)];

    setSelectedCategory(uniqueCategories);
  }, []);

  console.log(selectedCategory);

  return (
    <div className="header">
      <div className="logo">
        <h2>experience</h2>
        <h3>Kodaikanal</h3>
      </div>

      <nav>
        <div className="dropdown">
          <Link to="/sightseeing">Things to do ▼</Link>

          <div className="dropdown-content">
            {selectedCategory.map((category) => (
              <Link key={category} to={`/${category}`}>
                {category}
              </Link>
            ))}
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
          <button>Events ▼</button>

          <div className="dropdown-content">
            <Link to="/music-festival">Music Festival</Link>
            <Link to="/food-festival">Food Festival</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;