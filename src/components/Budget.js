import { UnderConstruction } from "./Util";

function Budget({ activeTab, data }) {
    return (
      <div id="budget" className={`tab-content ${activeTab === 'budget'? 'active' : ''}`}>
        <p>Budget... under construction</p>
        <UnderConstruction />
      </div>
    )
}

export default Budget;
