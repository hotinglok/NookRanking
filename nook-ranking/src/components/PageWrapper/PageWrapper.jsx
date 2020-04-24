import React from 'react';
import IslanderCard from '../IslanderCard/IslanderCard'
import RankList from '../RankList/RankList';
import Search from '../Search/Search';

const PageWrapper = ({ data }) => {

  const villagers = data.map((villager, i) => (
    <IslanderCard
      key={i}
      name={villager.name_en}
      imageHref={`${process.env.PUBLIC_URL}/assets/images/${villager.name_en}.jpg`}
    />
  ));

  return (
    <div className="page-wrapper">
      <Search></Search>
      <RankList></RankList>
      {villagers}
    </div>
  );
}

export default PageWrapper;
