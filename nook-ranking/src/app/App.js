import React from 'react';
import './App.css';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import villagerData from '../data/villager-data.json';

function App() {
  return (
    <div className="App">
      <PageWrapper data={villagerData}/>
    </div>
  );
}

export default App;
