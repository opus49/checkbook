import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("ledger");
  const openTab = (tabName) => {
    setActiveTab(tabName);
  }


       <button
        className={`tab-button ${activeTab === 'ledger' ? 'active' : ''}`}
        onClick={() => openTab('ledger')}
      ></button>
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
        <div id="ledger" className={`tab-content ${activeTab === 'ledger'? 'active' : ''}`}>
          <p>Ledger...</p>
        </div>

        <div id="credits" className={`tab-content ${activeTab === 'credits'? 'active' : ''}`}>
          <p>Credits...</p>
        </div>

        <div id="debits" className={`tab-content ${activeTab === 'debits'? 'active' : ''}`}>
          <p>Debits...</p>
        </div>

        <div id="budget" className={`tab-content ${activeTab === 'budget'? 'active' : ''}`}>
          <p>Budget...</p>
        </div>
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