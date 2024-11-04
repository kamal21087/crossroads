import React from 'react';
import { useParams } from 'react-router-dom';
import { theaterData } from "../services/theaterServices";

function TheaterDetail() {
  const { id } = useParams();
  const theater = theaterData.find((item) => item.id === parseInt(id));

  if (!theater) return <p>Theater not found.</p>;

  return (
    <div className="container">
      <h1 className="title">{theater.name}</h1>
      <p><strong>Address:</strong> {theater.address}</p>
      <p><strong>Type:</strong> {theater.type}</p>
      <p><strong>IMAX:</strong> {theater.hasIMAX ? 'Yes' : 'No'}</p>
      <p><a href={theater.website} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
    </div>
  );
}

export default TheaterDetail;
