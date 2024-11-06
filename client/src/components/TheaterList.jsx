import React from 'react';
import { Link } from 'react-router-dom';
import { theaterData } from "../services/theaterServices";

function TheaterList() {
  return (
    <div className="content-container">
      <h1 className="title">Favorite Movie Theaters</h1>
      <ul>
        {theaterData.map((theater) => (
          <li key={theater.id} className="box">
            <Link to={`/theaters/${theater.id}`}>
              <h2 className="title is-4">{theater.name}</h2>
              <p>{theater.address}</p>
              <p>Type: {theater.type}</p>
              <p>IMAX: {theater.hasIMAX ? "Yes" : "No"}</p>
              <p>
                <a href={theater.website} target="_blank" rel="noopener noreferrer">
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

export default TheaterList;
