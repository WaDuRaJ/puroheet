import React from 'react';
import './card.css'
import amarnath_icon from '../assets/amarnath.jpg'

const TourCard6 = () => {
  return (
    <div className="card">
      <img src={amarnath_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">amarnath pillgrimage booking</h2>
        <p className="card-text">book priest for amarnath pillgrimage yatra </p>
        <p className="card-start-date">6 days 5 nights</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default TourCard6;