import React from 'react';
import './IslanderCard.css';

const IslanderCard = ({ name, imageHref }) => {
  return (
    <div className="islander-card">
      <img src={imageHref} alt={`${name} Islander`}/>
      <h2>{name}</h2>
    </div>
  );
}

export default IslanderCard;
