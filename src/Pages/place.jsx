import { useParams } from "react-router";
import React from "react"; 
import lakeImage from "../assets/kodaikanal-lake.jpg"
import valleyImg from "../assets/Green-Valley-View.jpg"
function Place (){
 const {place} = useParams();
    const Places = [
        {
            id: 1,
            name: "Kodaikanal Lake",
            image: lakeImage
        },
        {
            id: 2,
            name: "Green Valley View",
            image: valleyImg
        }
    ];
    const placeData = Places.find(item => item.id === Number(place));
  return (
    <div>
      <div>
        
            <h1>{placeData.name}</h1>
            
         <img src={placeData.image} width={500} height={300} alt={placeData.name} /> 
    </div>
    </div>
    
   
  );
};
export default Place;