import React, { useEffect, useState } from 'react';
import './App.css';

import Budget from './components/Budget';
import Credits from './components/Credits';
import Debits from './components/Debits';
import Ledger from './components/Ledger';
import { fetchData } from "./services/dataService";

function App() {
  const [activeTab, setActiveTab] = useState("ledger");
  const [data, setData] = useState(null);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  }

  const updateData = (newData) => {
    setData(newData);
  };

  useEffect(() => {
    // fetch data when component mounts
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <div className="container">

      <div className="tab-container">
        <NonClickableButton />
        <button className={`tab ${activeTab === 'ledger' ? 'active' : ''}`} onClick={() => openTab('ledger')}>Ledger</button>
        <button className={`tab ${activeTab === 'credits' ? 'active' : ''}`} onClick={() => openTab('credits')}>Credits</button>
        <button className={`tab ${activeTab === 'debits' ? 'active' : ''}`} onClick={() => openTab('debits')}>Debits</button>
        <button className={`tab ${activeTab === 'budget' ? 'active' : ''}`} onClick={() => openTab('budget')}>Budget</button>
        <NonClickableButton />
      </div>

      <div className="content">
        <Ledger activeTab={activeTab} data={data}/>
        <Credits activeTab={activeTab} data={data}/>
        <Debits activeTab={activeTab} data={data}/>
        <Budget activeTab={activeTab} data={data}/>
      </div>

    </div>
  );
}

function NonClickableButton() {
  return (
    <button className="tab non-clickable"></button>
  );
}

export default App;