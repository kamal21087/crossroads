import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantData } from "../services/restaurantServices";

function RestaurantList() {
  return (
    <div className="container">
      <h1 className="title">Favorite Restaurants</h1>
      <ul>
        {restaurantData.map((restaurant) => (
          <li key={restaurant.id} className="box">
            <Link to={`/restaurants/${restaurant.id}`}>
              <h2 className="title is-4">{restaurant.name}</h2>
              <p>{restaurant.address}</p>
              <p>Type: {restaurant.type}</p>
              <p>Rooftop: {restaurant.rooftop ? "Yes" : "No"}</p>
              <p>
                <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
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

export default RestaurantList;
