import React from 'react';
import { useParams } from 'react-router-dom';
import { parkData } from "../services/parkServices";

function ParkDetail() {
  const { id } = useParams();
  const park = parkData.find((item) => item.id === parseInt(id));

  if (!park) return <p>Park not found.</p>;

  return (
    <div className="container">
      <h1 className="title">{park.name}</h1>
      <p><strong>Address:</strong> {park.address}</p>
      <p><strong>Type:</strong> {park.type}</p>
      <p><strong>Playground:</strong> {park.hasPlayground ? 'Yes' : 'No'}</p>
      <p><a href={park.website} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
    </div>
  );
}

export default ParkDetail;
