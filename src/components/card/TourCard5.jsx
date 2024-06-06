import React from 'react';
import './card.css'
import mayapur_icon from '../assets/mayapur.jpg'

const TourCard5 = () => {
  return (
    <div className="card">
      <img src={mayapur_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">mayapur pillgrimage booking</h2>
        <p className="card-text">book priest for mayapur pillgrimage yatra </p>
        <p className="card-start-date">3 days 2 nights</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default TourCard5;