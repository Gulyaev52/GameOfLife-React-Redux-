import { Map } from 'immutable';

export const makeCell = (alive=false) => Map({ alive });

export const isAlive = cell => cell.get('alive');

export const toggleAlive = cell => cell.set('alive', !cell.get('alive'));