import React from 'react';
import './card.css'
import durga_icon from '../assets/durga.jpg'

const Card1 = () => {
  return (
    <div className="card">
      <img src={durga_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Doorga Pooja</h2>
        <p className="card-text">book briest for a 5 day durga pooja </p>
        <p className="card-start-date">from 10 october</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card1;