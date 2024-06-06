import React from 'react';
import './card.css'
import kedarnath_icon from '../assets/kedernath.jpg'

const TourCard2 = () => {
  return (
    <div className="card">
      <img src={kedarnath_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">kedarnath pillgrimage booking</h2>
        <p className="card-text">book priest for kedarnath pillgrimage yatra </p>
        <p className="card-start-date">7 days 6 nights</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default TourCard2;