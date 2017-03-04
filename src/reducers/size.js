import * as Size from '../constants/Size';
import { SET_SIZE } from '../constants/ActionTypes';

const initialState = Size.MEDIUM;

export default function size(state = initialState, action) {
    switch(action.type) {
        case SET_SIZE:
            return action.size;
        default:
            return state;
    }
}