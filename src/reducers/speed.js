import * as Speed from '../constants/Speed';
import { SET_SPEED } from '../constants/ActionTypes';

const initialState = Speed.SLOW;

export default function speed(state = initialState, action) {
    switch(action.type) {
        case SET_SPEED:
            return action.speed;
        default:
            return state;
    }
}