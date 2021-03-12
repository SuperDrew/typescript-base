import { Grid } from '../test/neighbours.test';

export class GameOfLife {
    private _grid: Grid;

    constructor(grid: Grid) {
        this._grid = grid;
    }

    public advanceTime(): GameOfLife {
        const newGrid = new Grid([]);
        for (const livingCell of this._grid.liveCells) {
            newGrid.addLiveCell(livingCell);
        }
        return new GameOfLife(newGrid);
    }

    get liveCells() {
        return this._grid.liveCells
    }
}
