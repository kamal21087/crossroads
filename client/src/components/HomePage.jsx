import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Home() {
  return (
    <div className="home-container">
      <h1 className="project-title">Crossroads</h1>
      <section className="hero is-primary is-bold hero-banner">
        <div className="hero-body">
          <p className="title">Welcome to Your Favorite Places. Explore your saved spots and find new favorites!</p>
        </div>
      </section>

      <div className="columns is-multiline">
        {/* Restaurants Card */}
        <div className="column is-one-third">
          <Link to="/restaurants">
            <div className="card custom-card">
              <div className="card-content">
                <p className="title is-4">Favorite Restaurants</p>
                <p className="content">Discover and add to your list of favorite dining spots.</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Parks Card */}
        <div className="column is-one-third">
          <Link to="/parks">
            <div className="card custom-card">
              <div className="card-content">
                <p className="title is-4">Favorite Parks</p>
                <p className="content">Visit your favorite parks for relaxation and nature.</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Movie Theaters Card */}
        <div className="column is-one-third">
          <Link to="/theaters">
            <div className="card custom-card">
              <div className="card-content">
                <p className="title is-4">Favorite Movie Theaters</p>
                <p className="content">Check out theaters where you can catch the latest films.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;