// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <p>
        Fit Locker, a place where you can find various strength training routines, create your own, and contribute to the fitness community.
      </p>
      <Link to="/CreateRoutines">
        <button>Create New Routine</button>
      </Link>
    </>
  );
}

export default HomePage;
