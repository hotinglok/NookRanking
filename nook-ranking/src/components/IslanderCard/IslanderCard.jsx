import React from 'react';
import './IslanderCard.css';

const IslanderCard = ({ name, imageHref }) => {
  return (
    <div className="islander-card">
      <h2>{name}</h2>
      <img src={imageHref} alt={`${name} Islander`}/>
    </div>

  );
}

export default IslanderCard;
