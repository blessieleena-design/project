import { useParams } from "react-router";

import React from "react"; 
// import lakeImage from "../assets/kodaikanal-lake.jpg"
// import valleyImg from "../assets/Green-Valley-View.jpg"
import places from "../data/placeData.json";
import event from "../data/eventData.json";
import placeData from "../data/placeData.json";

const  Place = () =>{
 const {place, category} = useParams(); 

 const PlaceData = placeData.find(item => (item.id === Number(place) && item.category === category ));

  return (
    <div>
      <div>
        
            <h1>{PlaceData.name}</h1>
            <h2>Category: {PlaceData.category}</h2>
            
         <img src={PlaceData.image} width={500} height={300} alt={PlaceData.name} /> 
    </div>
    </div>
    
   
  );
};

export default Place;