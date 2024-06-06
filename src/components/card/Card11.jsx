import React from 'react';
import './card.css'
import annaprashan_icon from '../assets/anraprasan.jpg'

const Card11 = () => {
  return (
    <div className="card">
      <img src={annaprashan_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">annaprashan ceremony</h2>
        <p className="card-text">book priest for annaprashan ceremony </p>
        <p className="card-start-date">any time welcome </p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card11;