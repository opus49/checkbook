import React from 'react';
import "../styles/ContextMenus.css";

function LedgerContextMenu({ isVisible, position }) {
    const options = ["Edit", "Delete"];

    return isVisible ? (
        <div className='context-menu' style={{ top: position.top, left: position.left }}>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    ) : null;
}

export default LedgerContextMenu;