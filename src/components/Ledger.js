import React, { useState, useEffect } from 'react';
import UnderConstruction from './Util';
import "../styles/Ledger.css";

function Ledger({ activeTab, data } ) {
    const [fullLedger, setFullLedger] = useState([]);
    const [activeRow, setActiveRow] = useState(null);

    useEffect(() => {
        if (data && data.ledger) {
            let balance = 0;
            const ledger = data.ledger.map((entry) => {
                balance += entry.amount;
                return { ...entry, balance: balance };
            });
            setFullLedger(ledger);
        }
    }, [data]);

    return (
      <div id="ledger" className={`tab-content ${activeTab === 'ledger'? 'active' : ''}`}>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th className="center-align">Amount</th>
                    <th className="center-align">Balance</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {fullLedger.map((entry, index) => (
                    <tr
                     key={index}
                     onMouseEnter={() => setActiveRow(index)}
                     onMouseLeave={() => setActiveRow(null)}
                    >
                        <td>{entry.date.split("T")[0]}</td>
                        <td>{entry.desc}</td>
                        <td className="right-align">{entry.amount.toFixed(2)}</td>
                        <td className={`right-align ${entry.balance < 0 ? 'negative-balance' : ''}`}>{entry.balance.toFixed(2)}</td>
                        { activeRow === index ?  (
                            <td>
                                <span className="context-menu-trigger">&middot;&middot;&middot;</span>
                            </td>
                        ) : (
                            <td></td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
}

export default Ledger;
