import { useState } from 'react';

function AddRestaurant() {
  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    rooftop: false,
    website: '',
    type: '',
    imgUrl: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRestaurant({
      ...restaurant,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/restaurants/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(restaurant),
      });
      alert('Restaurant added!');
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add New Restaurant</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <input type="checkbox" name="rooftop" onChange={handleChange} /> Rooftop
          <input name="website" placeholder="Website" onChange={handleChange} />
          <input name="type" placeholder="Type" onChange={handleChange} />
          <input name="imgUrl" placeholder="Image URL" onChange={handleChange} />
          <button type="submit">Add Restaurant</button>
        </form>
      )}
    </div>
  );
}


export default AddRestaurant;
