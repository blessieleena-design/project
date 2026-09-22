import React from "react"
import Header from "../Components/Header"
import Kodaikanal from "../assets/Kodaikanal.jpg"
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="hero">

      <Header />
        <img src={Kodaikanal} alt="Kodaikanal"/>

        <div className="text">
          <h1>Welcome to Kodaikanal</h1>
          <p>
            Explore the beauty of nature and enjoy your stay
          </p>
        </div>

      </div>

    
  );
};

export default MainPage;
