import React from 'react';
import './card.css'
import gangasagar_icon from '../assets/gangasagar.jpg'

const TourCard4 = () => {
  return (
    <div className="card">
      <img src={gangasagar_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">gangasagar pillgrimage booking</h2>
        <p className="card-text">book priest for gangasagar pillgrimage yatra </p>
        <p className="card-start-date">4 days 3 nights</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default TourCard4;