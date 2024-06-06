import React from 'react';
import './card.css'
import shibratri_icon from '../assets/shiv.jpeg.jpg'

const Card5 = () => {
  return (
    <div className="card">
      <img src={shibratri_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">shibratri Pooja</h2>
        <p className="card-text">book priest for shibratri pooja </p>
        <p className="card-start-date">from 8th march</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card5;