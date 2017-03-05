import React from 'react';
import './Universe.styl';
import Cell from '../Cell/Cell';
import * as CellStates from '../../constants/CellStates';

const classNameStates = {
    [CellStates.ALIVE] : 'alive',
    [CellStates.OLD] : 'old',
    [CellStates.DEAD] : 'dead'
};

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
                        state={classNameStates[cell.get('state')]}
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