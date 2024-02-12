// LinkToMap.js
import React from 'react';
import { Link } from 'react-router-dom';

const LinkToMap = () => {
  return (
    <div>
      <h1>Click the link to open the map</h1>
      <Link to="/map">Open Map</Link>
    </div>
  );
};

export default LinkToMap;
