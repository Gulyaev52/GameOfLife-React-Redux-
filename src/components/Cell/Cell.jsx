import React from 'react';
import './Cell.styl';


export default function Cell({ onToggleState, pos, state, size='small' }) {
    const modifiers = [ 
        `cell_size_${size}`,
        `cell_state_${state}`
    ].join(' ');
    
    return (
        <div 
            className={`cell ${modifiers}`} 
            onClick={onToggleState.bind(this, ...pos)}
        >
        </div>
    );
} 