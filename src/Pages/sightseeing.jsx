// import {useParams} from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
const Sightseeing=()=> {
  return (
    <div>
      <h1>Things to do</h1>
      <Link to="/sightseeing/kodaikanal-lake">
        <h2>Lake</h2>
      </Link>
    </div>
  );
};
export default Sightseeing;