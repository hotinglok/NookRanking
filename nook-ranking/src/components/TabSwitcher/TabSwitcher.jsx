import React from 'react'

const TabSwitcher = ({checked, handleClick}) => {
  return (
    <>
      <button onClick={() => handleClick('index')}>Villager Index</button>
      <button onClick={() => handleClick('ranker')}>Villager Ranker</button>
    </>
  )
};

export default TabSwitcher;
