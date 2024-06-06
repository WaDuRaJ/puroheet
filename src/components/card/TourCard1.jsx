import React from 'react';
import './card.css'
import puri_icon from '../assets/puri.jpg'

const TourCard1 = () => {
  return (
    <div className="card">
      <img src={puri_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">puri pillgrimage booking</h2>
        <p className="card-text">book priest for puri pillgrimage yatra </p>
        <p className="card-start-date">4 days 3 nights</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default TourCard1;