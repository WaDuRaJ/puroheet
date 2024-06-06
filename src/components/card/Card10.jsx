import React from 'react';
import './card.css'
import death_icon from '../assets/death.jpg'

const Card10 = () => {
  return (
    <div className="card">
      <img src={death_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">death ceremony</h2>
        <p className="card-text">book priest for death ceremony </p>
        <p className="card-start-date">any time rest in peace</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card10;