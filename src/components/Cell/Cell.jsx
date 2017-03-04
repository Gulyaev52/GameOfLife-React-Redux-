import React from 'react';
import './Cell.styl';

export default function Cell({ onToggleState, pos, isAlive, size='small' }) {
    const modifiers = [
        `cell_size_${size}`, 
        isAlive ? 'cell_state_alive' : 'cell_state_dead'
    ].join(' ');
    
    return (
        <div 
            className={`cell ${modifiers}`} 
            onClick={onToggleState.bind(this, ...pos)}
        >
        </div>
    );
} 