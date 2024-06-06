import React from 'react';
import './card.css'
import birth_icon from '../assets/birth.webp'

const Card9 = () => {
  return (
    <div className="card">
      <img src={birth_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">birth ceremony</h2>
        <p className="card-text">book priest for birth ceremony </p>
        <p className="card-start-date">any time</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card9;