import { useState, useEffect } from 'react';

function DeleteRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchRestaurants() {
      const res = await fetch('/api/restaurants');
      const data = await res.json();
      setRestaurants(data);
    }
    fetchRestaurants();
  }, []);

  const handleDelete = async () => {
    try {
      await fetch(`/api/restaurants/delete/${selectedId}`, { method: 'DELETE' });
      alert('Restaurant deleted!');
      setRestaurants(restaurants.filter((r) => r.id !== selectedId));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowDelete(!showDelete)}>Delete Restaurant</button>
      {showDelete && (
        <>
          <select onChange={(e) => setSelectedId(e.target.value)}>
            <option value="">Select a restaurant</option>
            {restaurants.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
          <button onClick={handleDelete}>Confirm Delete</button>
        </>
      )}
    </div>
  );
}

export default DeleteRestaurant;
