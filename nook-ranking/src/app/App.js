import React from 'react';
import './App.css';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import data from '../data/villager-data.json';

function App() {
  const villagerData = Object.keys(data).map(key => {
    return data[key];
  });
  return (
    <div className="App">
      <PageWrapper data={villagerData}/>
    </div>
  );
}

export default App;
