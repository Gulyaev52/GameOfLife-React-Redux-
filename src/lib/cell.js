import { Map } from 'immutable';
import * as CellStates from '../constants/CellStates';


export const makeCell = (state=CellStates.DEAD) => Map({ state }); 

export const isLive = cell => (
    cell.get('state') == CellStates.ALIVE || cell.get('state') == CellStates.OLD
);

export const toggleAlive = (cell) => { 
    if (isLive(cell)) {
        return cell.set('state', CellStates.DEAD);
    }
    else {
        return cell.set('state', CellStates.ALIVE);
    }
};