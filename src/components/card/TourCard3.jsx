import React from 'react';
import './card.css'
import haridwar_icon from '../assets/hariduar.jpg'

const TourCard3 = () => {
  return (
    <div className="card">
      <img src={haridwar_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">haridwar pillgrimage booking</h2>
        <p className="card-text">book priest for haridwar pillgrimage yatra </p>
        <p className="card-start-date">10 days 9 nights</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default TourCard3;