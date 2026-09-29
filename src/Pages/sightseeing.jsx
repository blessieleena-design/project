import {useParams} from 'react-router';
import React from 'react';
import { Link } from 'react-router'
import place from "../Pages/place"
import "./sightseeing.css"
const Sightseeing=()=> {
   
  return (
    <div>
      <h1 className='title'>Things to do</h1>
      <Link to="/sightseeing/1">
        
        <h2>Lake</h2>
      </Link>
      <Link to="/sightseeing/2">
        <h2>Green Valley View</h2>
      </Link>
    </div>
    
  );
};
export default Sightseeing;