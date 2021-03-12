import {Grid} from "../main/grid";




function isAdjacent(cell1: [number, number], cell2: [number, number]) {
    const distance = Math.abs(cell1[0] - cell2[0]) + Math.abs(cell1[1] - cell2[1]);
    return distance <= 2 && distance > 0;
}

function findLivingNeighbours(grid: Grid, cell: [number, number]) {
    const neighbours = new Grid([]);
    for(const gridCell of grid.liveCells) {
        if(isAdjacent(gridCell, cell)) {
            neighbours.addLiveCell(gridCell);
        }
    }
    return neighbours;
}

describe('Neighbours', () => {

    it.each([
        ['above the cell', [[0,0], [0,1]], [0,0], [[0,1]]],
        ['above to the right of the cell', [[0,0], [1,1]], [0,0], [[1,1]]],
        ['to the right of the cell', [[0,0], [1,0]], [0,0], [[1,0]]],
        ['to the bottom right of the cell', [[0,0], [1,-1]], [0,0], [[1,-1]]],
        ['to the bottom right of the cell', [[0,0], [1,-1]], [0,0], [[1,-1]]],
    ])('should get the living neighbours %p', (_description, gridCells, cell, neighbours) => {
        const grid = new Grid(gridCells);
        expect(findLivingNeighbours(grid, cell).liveCells).toStrictEqual(neighbours);
    })
 });
