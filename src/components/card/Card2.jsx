import React from 'react';
import './card.css'
import ganesh_icon from '../assets/gonesh.jpg'

const Card2 = () => {
  return (
    <div className="card">
      <img src={ganesh_icon} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">ganesh Pooja</h2>
        <p className="card-text">book priest for ganesh pooja </p>
        <p className="card-start-date">from 14 april</p>
        <button className="card-book-button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Card2;