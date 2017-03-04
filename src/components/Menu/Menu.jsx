import React from 'react';
import './Menu.styl';

export default function Menu({ direction, children }) {
  return (
    <div className={`menu menu_${direction}`}>
      { children }
    </div>
  );
}