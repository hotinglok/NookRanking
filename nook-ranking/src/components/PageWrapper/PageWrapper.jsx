import React from 'react';
import RankList from '../RankList/RankList';
import Search from '../Search/Search';

const PageWrapper = ({ data }) => {
  console.log(data);
  return (
    <body>
      <Search></Search>
      <RankList></RankList>
    </body>
  );
}

export default PageWrapper;
