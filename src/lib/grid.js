import { List, Map } from 'immutable';
import { makeCell, toggleAlive, isAlive } from './cell';

export const makeGrid = (height, width) => {
    return List({ length: height })
        .map((_, y) => List({ length: width })
            .map((_, x) => makeCell(false))); 
} 

export const getCell = (grid, x, y) => grid.getIn([y, x]);

export const changeSize = (grid, height, width) => {
    const newGrid = makeGrid(height, width);

    return newGrid.map((row, y) => (
        row.map((_, x) => getCell(grid, x, y) || makeCell())
    ));
};

export const mapGrid = (grid, callback) => (
    grid.map((row, y) => (
        row.map((cell, x) => callback(cell, x, y))
    ))
);

export const toString = (grid) => (
    grid.map(row => row.map(isAlive).join(' ')).join('\n')
);