import {useParams} from 'react-router';
import React from 'react';
import { Link } from 'react-router';
const Sightseeing=()=> {
  return (
    <div>
      <h1>Things to do</h1>
      <Link to="/sightseeing/kodaikanal-lake">
        <h2>Lake</h2>
      </Link>
      <Link to="/sightseeing/green-valley-view">
        <h2>Green Valley View</h2>
      </Link>
    </div>
  );
};
export default Sightseeing;