import React from 'react';
import './Universe.styl';
import Cell from '../Cell/Cell';

export default function Universe({ grid, sizeCell, onToggleStateCell }) {
    return (
      <div className='universe'>
        { 
          grid.map((row, y) => (
            <div className='universe__row' key={y}>
               {
                  row.map((cell, x) => ( 
                      <Cell 
                        key={[x, y].toString()}
                        isAlive={cell.get('alive')}
                        pos={[x, y]}
                        size={sizeCell}
                        onToggleState={onToggleStateCell}/> 
                  ))
               }
            </div>
          ))
        }
      </div>
    );
} 