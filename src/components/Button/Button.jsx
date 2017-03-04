import React from 'react';
import './Button.styl';

export default function Button({ text, size, isActive, onClick }) {
    const modifiers = [
      `button_size_${size}`,
      isActive ? `button_active` : ''
    ].join(' ');
    
    return (
      <button 
        className={`button ${modifiers}`}
        onClick={onClick}  
      >
        { text }
      </button>
    );
} 