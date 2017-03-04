import { combineReducers } from 'redux';
import { Map } from 'immutable';

import universe from './universe';
import generation from './generation';
import speed from './speed';
import size from './size'; 
import gameState from './gameState';

const initialState = Map();

function rootReducer(state=initialState, action) {
    return Map({
        universe: universe(state.get('universe'), action),
        generation: generation(state.get('generation'), action),
        speed: speed(state.get('speed'), action),
        size: size(state.get('size'), action), 
        gameState: gameState(state.get('gameState'), action)
    })
}

export default rootReducer;