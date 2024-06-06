import React from 'react';
import './card.css'
import grihoprobesh_icon from '../assets/griho.jpg'

const Card12 = () => {
  return (
    <div className="card">
      <img src={grihoprobesh_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">grihoprobesh ceremony</h2>
        <p className="card-text">book priest for grihoprobesh ceremony </p>
        <p className="card-start-date">any time</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card12;