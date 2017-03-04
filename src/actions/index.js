import * as types from '../constants/ActionTypes'; 

export function nextGeneration() {
    return {
        type: types.NEXT_GENERATION
    };
}

export function toggleStateCell(x, y) {
    return {
        type: types.TOGGLE_STATE_CELL,
        x,
        y
    };
}

export function changeSize(size) {
    return {
        type: types.CHANGE_SIZE,
        size
    };
}

export function clearUniverse() {
    return {
        type: types.CLEAR_UNIVERSE
    };
}

export function setSpeed(speed) {
    return {
        type: types.SET_SPEED,
        speed
    };
} 

export function setSize(size) {
    return { 
        type: types.SET_SIZE,
        size
    };
}

export function play() {
    return (dispatch, getState) => {
        dispatch({ type: types.PLAY });
        dispatch(nextGeneration());

        (function loop() {
            const state = getState(); 
            if (state.getIn(['gameState', 'isPlay'])) {
                setTimeout(() => { 
                    dispatch(nextGeneration());
                    loop(); 
                }, state.get('speed'))
            }
        })();
    }
}

export function pause() {
    return {
        type: types.PAUSE
    };
}