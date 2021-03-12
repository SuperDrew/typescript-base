import { GameOfLife } from '../main/gameOfLife';
import { Grid } from './neighbours.test';

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
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual([[]]);
    })

    it("two live cells next to each other should die when you advance time", () => {
        const gameOfLife = new GameOfLife(new Grid([[0,0], [0,1]]));
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual([[]]);
    })

    it("grid with all cells having two or three neighbours should return the same grid when you advance time", () => {
        const grid1 = new Grid([[0, 0], [0, 1], [1, 0]]);
        const gameOfLife = new GameOfLife(grid1);
        expect(gameOfLife.advanceTime().liveCells).toStrictEqual(gameOfLife.liveCells);
    })
})
