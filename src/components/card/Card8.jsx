import React from 'react';
import './card.css'
import marraige_icon from '../assets/biye.jpg'

const Card8 = () => {
  return (
    <div className="card">
      <img src={marraige_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">marraige ceremony</h2>
        <p className="card-text">book priest for marraige ceremony </p>
        <p className="card-start-date">any time</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card8;