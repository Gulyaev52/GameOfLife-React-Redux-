import { fromJS } from 'immutable';
import { makeGrid, mapGrid, getCell, toString as toStringGrid, changeSize as changeSizeGrid } from './grid';
import { toggleAlive, isAlive, makeCell } from './cell';

const direction = {
    BOTTOM: -1,
    TOP: 1,
    LEFT: -1,
    RIGHT: 1,
    STAY: 0
};

const makeUniverse = (height, width) => (
    fromJS(
        {
            grid: makeGrid(height, width),
            height: height,
            width: width
        }
    )
); 

const toggleStateCell = (universe, x, y) => (
    universe.updateIn(['grid', y, x], toggleAlive)
);

const changeSize = (universe, newHeight, newWidth) => (
    universe
        .set(
            'grid', 
            changeSizeGrid(universe.get('grid'), newHeight, newWidth)
        )
        .set('height', newHeight)
        .set('width', newWidth)
); 

const clear = (universe) => (
    universe.set('grid', makeGrid(universe.get('height'), universe.get('width')))
);

const nextGeneration = (universe) => (
    universe.update('grid', (grid) => (
        mapGrid(grid, (cell, x, y) => { 
            const numAliveNeighbors = countAliveNeighbors(grid, x, y);

            if (isAlive(cell)) {
                if (numAliveNeighbors != 2 && numAliveNeighbors != 3) { 
                    return makeCell(false);
                }
            }
            else if (numAliveNeighbors == 3) { 
                return makeCell(true);
            } 
            
            return cell;
        })
    ))
);

const toString = (universe) => (
    toStringGrid(universe.get('grid'))
);

function countAliveNeighbors(grid, x, y) {  
    return getAliveNeighbors(getNeighbors(grid, x, y)).length;
}

function getAliveNeighbors(neighbors) {
    return neighbors.filter(isAlive);
} 

function getNeighbors(grid, x, y) {
    const getCoordNeighborCell = (xCell, yCell) => ( 
        ([xDirection, yDirection]) => [xCell + xDirection, yCell + yDirection]
    );

    const directions = [
        [direction.STAY, direction.BOTTOM], [direction.STAY, direction.TOP],
        [direction.LEFT, direction.STAY], [direction.RIGHT, direction.STAY],
        [direction.RIGHT, direction.TOP],  [direction.RIGHT, direction.BOTTOM],
        [direction.LEFT, direction.TOP], [direction.LEFT, direction.BOTTOM]
    ];   

    return directions
        .map(getCoordNeighborCell(x, y))
        .map(coordNeighborCell => getCell(grid, ...coordNeighborCell))
        .filter(Boolean);
}; 

export { 
    makeUniverse, 
    toggleStateCell, 
    nextGeneration, 
    changeSize,
    clear,
    toString
};