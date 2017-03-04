import { PLAY, PAUSE, CLEAR_UNIVERSE, SET_SIZE } from '../constants/ActionTypes';
import { Map } from 'immutable'; 

const initialState = new Map({
    isPlay: false,
    isPause: false
});

export default function gameState(state = initialState, action) {
    switch(action.type) {
        case PLAY:
            return state
                .set('isPlay', true)
                .set('isPause', false);
        case PAUSE:
            return state
                .set('isPlay', false)
                .set('isPause', true);
        case SET_SIZE:
        case CLEAR_UNIVERSE:
            return initialState;
        default:
            return state;
    }
}