import React from 'react';
import './card.css'
import saraswati_icon from '../assets/saraswati.jpg'

const Card3 = () => {
  return (
    <div className="card">
      <img src={saraswati_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">saraswati Pooja</h2>
        <p className="card-text">book priest for saraswati pooja </p>
        <p className="card-start-date">from 3rd february</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card3;