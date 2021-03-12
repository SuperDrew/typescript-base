import {Grid} from "../main/grid";

describe('Live Neighbours', () => {

    it.each([
        ['above the cell', [[0,0], [0,1]], [0,0], [[0,1]]],
        ['above to the right of the cell', [[0,0], [1,1]], [0,0], [[1,1]]],
        ['to the right of the cell', [[0,0], [1,0]], [0,0], [[1,0]]],
        ['to the bottom right of the cell', [[0,0], [1,-1]], [0,0], [[1,-1]]],
        ['to the bottom of the cell', [[0,0], [0,-1]], [0,0], [[0,-1]]],
        ['to the bottom left of the cell', [[0,0], [-1,-1]], [0,0], [[-1,-1]]],
        ['to left of the cell', [[0,0], [0,-1]], [0,0], [[0,-1]]],
        ['above to the left of the cell', [[0,0], [-1,1]], [0,0], [[-1,1]]]
    ])('should get the living neighbours %p', (_description, gridCells, cell, neighbours) => {
        const grid = new Grid(gridCells);
        expect(grid.findLivingNeighbours(cell).liveCells).toStrictEqual(neighbours);
    })
 });

describe('Zombie Neighbours', () => {
    it.each([
        //[0,1], [1,1], [1,0], [-1,0], [-1, -1], [1, -1], [0, -1], [-1, 1]
        ['above the cell', [[0,0]], [0,0], 8],
    ])('should get the number of zombies neighbours %p', (_description, gridCells, cell, numberOfZombiesNeighbours) => {
        const grid = new Grid(gridCells);
        expect(grid.findNumberOfZombieNeighbours(cell)).toStrictEqual(numberOfZombiesNeighbours);
    })
});
