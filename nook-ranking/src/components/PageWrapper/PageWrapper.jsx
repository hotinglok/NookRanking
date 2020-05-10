import React from 'react';
import './PageWrapper.css';
import IslanderCard from '../IslanderCard/IslanderCard'
import RankList from '../RankList/RankList';
import Search from '../Search/Search';

const PageWrapper = ({ data }) => {

  const villagers = data.map((villager, i) => (
    <IslanderCard
      key={i}
      name={villager.name_en}
      imageHref={`${process.env.PUBLIC_URL}/assets/villager-icon/${villager.name_en.split(' ').join('_')}.png`}
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
