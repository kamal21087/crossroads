import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../components/HomePage";
import RestaurantList from "../components/RestaurantList";
import RestaurantDetail from "../components/RestaurantDetail";
import ParkList from "../components/ParkList";
import ParkDetail from "../components/ParkDetail";
import TheaterList from "../components/TheaterList";
import TheaterDetail from "../components/TheaterDetail";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/parks" element={<ParkList />} />
        <Route path="/parks/:id" element={<ParkDetail />} />
        <Route path="/theaters" element={<TheaterList />} />
        <Route path="/theaters/:id" element={<TheaterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

