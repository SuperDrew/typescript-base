import { GameOfLife } from '../main/gameOfLife';
import { Grid } from '../main/grid';

describe('Game of life', () => {
    it("should be able to create a grid with one alive cell at 2,3", () => {
        expect(new GameOfLife(new Grid([
            [2, 3]
        ])).liveCells).toStrictEqual([
            [2, 3]
        ])
    });

    it("should be able to create a grid with one alive cell at 4,1", () => {
        expect(new GameOfLife(new Grid([
            [4, 1]
        ])).liveCells).toStrictEqual([
            [4, 1]
        ])
    });

    it("should be able to advance time", () => {
        const gameOfLife = new GameOfLife(new Grid([
            [4, 1]
        ]));
        expect(gameOfLife.advanceTime() instanceof GameOfLife).toBe(true)
    });

    it("a single live cell should die when you advance time", () => {
        const gameOfLife = new GameOfLife(new Grid([[0,0]]));
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual([]);
    })

    it("two live cells next to each other should die when you advance time", () => {
        const gameOfLife = new GameOfLife(new Grid([[0,0], [0,1]]));
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual([]);
    })

    it("grid with all cells having three neighbours should return the same grid when you advance time", () => {
        const grid = new Grid([[0, 0], [0, 1], [1, 0], [1, 1]]);
        const gameOfLife = new GameOfLife(grid);
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual(gameOfLife.liveCells);
    })

    it("dead cell with exactly three live neighbours (1,1) becomes a live cell, as if by reproduction", () => {
        const grid = new Grid([[0, 0], [1, 0], [2, 2]]);
        const gameOfLife = new GameOfLife(grid);
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual(new Grid([[1,1]]).liveCells);
    })
})
