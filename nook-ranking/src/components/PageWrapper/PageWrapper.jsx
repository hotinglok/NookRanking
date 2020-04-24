import React from 'react';
import RankList from '../RankList/RankList';
import Search from '../Search/Search';

const PageWrapper = ({ data }) => {
  const villagers = data.map((villager, i) => (
    <p key={i}>{villager.name_en}</p>
))
  return (
    <div className="page-wrapper">
      <Search></Search>
      <RankList></RankList>
      {villagers}
    </div>
  );
}

export default PageWrapper;
