import React, { useState, useRef } from 'react';
import './IslanderCard.css';
import CheckBox from '../CheckBox/CheckBox';

const IslanderCard = ({ name, imageHref, checkbox}) => {

  const inList = useRef();

  const handleClick = () => {
    inList.current.checked = !inList;
  };

  return (
    <div className="islander-card-container">
      <div className="islander-card">
        <img src={imageHref} alt={`${name} Islander`}/>
        <h2>{name}</h2>
        {checkbox && <CheckBox handleClick={handleClick} checked={inList} />}
      </div>
    </div>
  );
};

export default IslanderCard;
