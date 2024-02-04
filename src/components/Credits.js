import { UnderConstruction } from "./Util";

function Credits({ activeTab, data }) {
    return (
      <div id="credits" className={`tab-content ${activeTab === 'credits'? 'active' : ''}`}>
        <p>Credits... under construction</p>
        <UnderConstruction />
      </div>
    )
}

export default Credits;
