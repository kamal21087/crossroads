import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rooftop, setRooftop] = useState(false);
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ name, address, rooftop, type }),
    });
    navigate('/restaurants');
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Add New Restaurant</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input className="input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" checked={rooftop} onChange={(e) => setRooftop(e.target.checked)} />
              Has Rooftop
            </label>
          </div>
          <div className="field">
            <label className="label">Type</label>
            <div className="control">
              <input className="input" type="text" value={type} onChange={(e) => setType(e.target.value)} required />
            </div>
          </div>
          <button className="button is-primary" type="submit">Add Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;