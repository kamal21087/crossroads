import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Favorites</h1>
      <div className="columns">
        <div className="column">
          <div className="card" onClick={() => navigate('/restaurants')}>
            <div className="card-content">
              <p className="title">Favorite Restaurants</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card" onClick={() => navigate('/movie-theaters')}>
            <div className="card-content">
              <p className="title">Favorite Movie Theaters</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card" onClick={() => navigate('/parks')}>
            <div className="card-content">
              <p className="title">Favorite Parks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;