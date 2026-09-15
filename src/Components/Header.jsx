import React from "react";
// import Swiggy from "../assets/Swiggy.png"
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    
      {/* <p>Header data: 45</p>  */}
     </header>

  );
}

export default Header;


//         <img src={Swiggy} alt="Swiggy" width="100px" height="45px" />
//         <h1>Swiggy</h1>
//         </div>
//     <div className="menu">
//     <a href="https://www.swiggy.com/corporate/" >Swiggy Corporate</a>
//     <a href="https://partner.swiggy.com/food/login">Partner with us</a>
//     <button>Get the App</button>
//     <button>Sign In</button>
//     </div>
//     </header>
    
//     )
 

// export default Header


