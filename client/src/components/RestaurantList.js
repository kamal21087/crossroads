import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(res => res.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Saved Restaurants</h1>
        <Link to="/add-restaurant" className="button is-primary">Add New Restaurant</Link>
        <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>
              <Link to={`/restaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantList;