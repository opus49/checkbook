import { UnderConstruction } from "./Util";

function Debits({ activeTab, data }) {
    return (
      <div id="debits" className={`tab-content ${activeTab === 'debits'? 'active' : ''}`}>
        <p>Debits... under construction</p>
        <UnderConstruction />
      </div>
    )
}

export default Debits;
