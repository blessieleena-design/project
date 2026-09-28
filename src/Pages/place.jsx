import { useParams } from "react-router";
import React from "react"; 
import lakeImage from "../assets/kodaikanal-lake.jpg"
import valleyImg from "../assets/Green-Valley-View.jpg"
function Place (){
const {place} = useParams();
  return (
    <div>
        <img src={lakeImage} width ="500"/>
        <h1>Lake</h1>
        {/* <h1>{place}</h1> */}
        <p>Address:Lake Road,Kodaikanal</p>    
        <img src={valleyImg} width ="500"/>
        <h1>Valley</h1>
    </div>
    
   
  );
};
export default Place;