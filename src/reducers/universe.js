import * as types from '../constants/ActionTypes';
import { MEDIUM } from '../constants/Size';
import { 
    makeUniverse, 
    nextGeneration, 
    toggleStateCell, 
    changeSize
} from '../lib/universe'

const initialState = makeUniverse(...MEDIUM);

export default function universe(state = initialState, action) {
    switch(action.type) {
        case types.NEXT_GENERATION: 
            return nextGeneration(state);
        case types.TOGGLE_STATE_CELL:
            return toggleStateCell(state, action.x, action.y);
        case types.CLEAR_UNIVERSE:
            return makeUniverse(state.get('height'), state.get('width'));
        case types.SET_SIZE:   
            return changeSize(state, ...action.size); 
        default:
            return state;
    }
}