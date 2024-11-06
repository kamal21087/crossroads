import React, { useState } from 'react';
import { addRestaurant } from "../services/restaurantServices";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    rooftop: false,
    website: '',
    type: '',
    imgUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(restaurant).then(() => alert('Restaurant added!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="address" placeholder="Address" onChange={handleChange} required />
      <input name="type" placeholder="Type" onChange={handleChange} required />
      <input name="website" placeholder="Website" onChange={handleChange} />
      <input name="imgUrl" placeholder="Image URL" onChange={handleChange} />
      <label>
        Rooftop:
        <input
          type="checkbox"
          name="rooftop"
          checked={restaurant.rooftop}
          onChange={(e) => setRestaurant({ ...restaurant, rooftop: e.target.checked })}
        />
      </label>
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default AddRestaurant;
