import React from 'react';
import './card.css'
import satyanarayan_icon from '../assets/staya.jpg'

const Card6 = () => {
  return (
    <div className="card">
      <img src={satyanarayan_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">satyanarayan Pooja</h2>
        <p className="card-text">book priest for satyanarayan pooja </p>
        <p className="card-start-date">from 19 august</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card6;