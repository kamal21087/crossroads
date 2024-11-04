import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Favorite Places</h1>
      <Link to="/restaurants" className="card">
        <div className="card-content">
          <p className="title">Favorite Restaurants</p>
        </div>
      </Link>
      <Link to="/parks" className="card">
        <div className="card-content">
          <p className="title">Favorite Parks</p>
        </div>
      </Link>
      <Link to="/theaters" className="card">
        <div className="card-content">
          <p className="title">Favorite Movie Theaters</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
