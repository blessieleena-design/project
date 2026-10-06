import { useParams } from "react-router";
import React from "react"; 
// import lakeImage from "../assets/kodaikanal-lake.jpg"
// import valleyImg from "../assets/Green-Valley-View.jpg"
import places from "../data/placeData.json";
import event from "../data/eventData.json";
function Place (){
 const {place, category, name} = useParams(); 

 const placeData = places.find(item => (item.id === Number(place)));
  return (
    <div>
      <div>
        
            <h1>{placeData.name}</h1>
            <h2>Category: {placeData.category}</h2>
            
         <img src={placeData.image} width={500} height={300} alt={placeData.name} /> 
    </div>
    </div>
    
   
  );
};
export default Place;