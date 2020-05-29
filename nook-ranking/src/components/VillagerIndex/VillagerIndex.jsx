import React from 'react';
import './VillagerIndex.css';
import IslanderCard from '../IslanderCard/IslanderCard'

const VillagerIndex = ({ data }) => {

  const villagers = data.map((villager, i) => (
    <IslanderCard
      key={i}
      name={villager.name_en}
      imageHref={`${process.env.PUBLIC_URL}/assets/villager-icon/${villager.name_en.split(' ').join('_')}.png`}
      checkbox
    />
  ));

  return (
    <div className="villager-index">
      {villagers}
    </div>
  );
}

export default VillagerIndex;
