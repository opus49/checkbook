import UnderConstruction from "./Util";

function Debits({activeTab}) {
    return (
      <div id="debits" className={`tab-content ${activeTab === 'debits'? 'active' : ''}`}>
        <p>Debits... under construction</p>
        <UnderConstruction />
      </div>
    )
}

export default Debits;
