import React from 'react';
import { Link } from 'react-router-dom';
import { parkData } from "../services/parkServices";

function ParkList() {
  return (
    <div className="content-container">
      <h1 className="title">Favorite Parks</h1>
      <ul>
        {parkData.map((park) => (
          <li key={park.id} className="box">
            <Link to={`/parks/${park.id}`}>
              <h2 className="title is-4">{park.name}</h2>
              <p>{park.address}</p>
              <p>Type: {park.type}</p>
              <p>Playground: {park.hasPlayground ? "Yes" : "No"}</p>
              <p>
                <a href={park.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParkList;
