import React, {useState} from 'react';
import './App.css';
import VillagerIndex from '../components/VillagerIndex/VillagerIndex';
import VillagerRanker from '../components/VillagerRanker/VillagerRanker';
import TabSwitcher from '../components/TabSwitcher/TabSwitcher';
import data from '../data/villager-data.json';

function App() {
  const villagerData = Object.keys(data).map(key => {
    return data[key];
  });

  const [tab, setTab] = useState('index');

  const handleClick = (tab) => {
    if (tab === 'index') {
      setTab('index');
    }
    else {
      setTab('ranker');
    }
  };

  return (
    <div className="App">
      <TabSwitcher handleClick={handleClick} />
      {tab === 'index' ?
        <VillagerIndex data={villagerData}/> :
        <VillagerRanker data={villagerData}/>
      }
    </div>
  );
}

export default App;
