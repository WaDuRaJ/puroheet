import React from 'react';
import './card.css'
import lokkhi_icon from '../assets/Lakhsmi.jpg'

const Card4 = () => {
  return (
    <div className="card">
      <img src={lokkhi_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">lokkhi Pooja</h2>
        <p className="card-text">book priest for lokkhi pooja </p>
        <p className="card-start-date">from 16 october</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card4;