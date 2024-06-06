import React from 'react';
import './card.css'
import biswakarma_icon from '../assets/viswa.jpg'

const Card7 = () => {
  return (
    <div className="card">
      <img src={biswakarma_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">biswakarma Pooja</h2>
        <p className="card-text">book priest for biswakarma pooja </p>
        <p className="card-start-date">from 17 september</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card7;