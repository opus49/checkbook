import React from 'react';
import "../styles/Dialogs.css";

export function DeleteTransactionDialog({ isVisible, position }) {
    return isVisible ? (
        <div className='dialog' style={{ top: position.top, left: position.left }}>
        </div>
    ) : null;
}

export function EditTransactionDialog({ isVisible, position }) {
    return isVisible ? (
        <div className='dialog' style={{ top: position.top, left: position.left }}>
        </div>
    ) : null;
}