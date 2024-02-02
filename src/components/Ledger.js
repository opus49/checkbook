import UnderConstruction from './Util';

function Ledger({activeTab}) {
    return (
      <div id="ledger" className={`tab-content ${activeTab === 'ledger'? 'active' : ''}`}>
        <p>Ledger... under construction</p>
        <UnderConstruction />
      </div>
    )
}

export default Ledger;
