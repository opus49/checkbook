import React, { useState, useEffect } from 'react';
import LedgerContextMenu from './ContextMenus';
import "../styles/Ledger.css";

function Ledger({ activeTab, data } ) {
    const [fullLedger, setFullLedger] = useState([]);
    const [activeRow, setActiveRow] = useState(null);
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

    const handleContextMenuClick = (event, rowIndex) => {
        event.preventDefault();
        event.stopPropagation();
        setIsContextMenuVisible(true);
        setContextMenuPosition({ top: event.clientY, left: event.clientX });
    }

    const handleDocumentClick = (event) => {
        console.log("document click!");
        if (isContextMenuVisible) {
            console.log("context menu is visible");
            const contextMenu = document.querySelector(".context-menu");
            if (!contextMenu.contains(event.target)) {
                setIsContextMenuVisible(false);
            }
        }
        else {
            console.log("context menu not visible");
        }
    }

    const handleRowMouseEvent = (event, rowIndex) => {
        if (!event.target.classList.contains("context-menu-trigger")) {
            if (event.type === "mousedown") {
                console.log("mouse down!");
            }
            else if (event.type === "mouseup") {
                console.log("mouse up!");
            }
        }
    }

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

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [isContextMenuVisible]);

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
                     onClick={(event) => handleRowMouseEvent(event, index)}
                     onMouseDown={(event) => handleRowMouseEvent(event, index)}
                     onMouseUp={(event) => handleRowMouseEvent(event, index)}
                     onContextMenu={(event) => handleContextMenuClick(event, index)}
                    >
                        <td>{entry.date.split("T")[0]}</td>
                        <td>{entry.desc}</td>
                        <td className="right-align">{entry.amount.toFixed(2)}</td>
                        <td className={`right-align ${entry.balance < 0 ? 'negative-balance' : ''}`}>{entry.balance.toFixed(2)}</td>
                        { activeRow === index ?  (
                            <td>
                                <span
                                  className="context-menu-trigger"
                                  onClick={(event) => handleContextMenuClick(event, index)}
                                >
                                  &middot;&middot;&middot;
                                </span>
                            </td>
                        ) : (
                            <td></td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
        <LedgerContextMenu isVisible={isContextMenuVisible} position={contextMenuPosition} />
      </div>
    );
}

export default Ledger;
