import { NEXT_GENERATION, CLEAR_UNIVERSE, RANDOM_UNIVERSE } from '../constants/ActionTypes';

const initialState = 0;

export default function generation(state = initialState, action) {
    switch(action.type) {
        case NEXT_GENERATION:
            return state + 1;
        case CLEAR_UNIVERSE:
        case RANDOM_UNIVERSE:
            return 0; 
        default:
            return state;
    }
}