import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';
import RestaurantDetail from './components/RestaurantDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
}

export default App;