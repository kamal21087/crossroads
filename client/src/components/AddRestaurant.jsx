import React, { useState } from 'react'; // import useState hook from react package to manage state in functional components.  
import { useNavigate } from 'react-router-dom'; // import useNavigate hook from react-router-dom package to navigate to a different route.  

const AddRestaurant = () => { // functional component to add a new restaurant.  
  const [name, setName] = useState(''); // use the useState hook to create a state variable for the restaurant name. 
  const [address, setAddress] = useState(''); // use the useState hook to create a state variable for the restaurant address.
  const [rooftop, setRooftop] = useState(false); // use the useState hook to create a state variable for the rooftop status. 
  const [type, setType] = useState(''); // use the useState hook to create a state variable for the restaurant type. 
  const navigate = useNavigate(); // use the useNavigate hook to navigate to a different route. 

  const handleSubmit = async (e) => { // async function to handle form submission.  
    e.preventDefault(); // prevent the default form submission behavior. 
    await fetch('/api/restaurants', { // send a POST request to the /api/restaurants route. 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${localStorage.getItem('jwt')}`, // include the JWT token in the request headers.  
      },
      body: JSON.stringify({ name, address, rooftop, type }), // send the restaurant data in JSON format. 
    });
    navigate('/restaurants'); // navigate to the /restaurants route after adding the restaurant. 
  };

  return ( // return the JSX for the AddRestaurant component. 
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