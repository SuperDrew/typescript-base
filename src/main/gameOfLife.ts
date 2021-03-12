import { Grid } from './grid';

export class GameOfLife {
    private _grid: Grid;

    constructor(grid: Grid) {
        this._grid = grid;
    }

    private numberOfNeighboursWhichLetCellLive: number[] = [2, 3];
    public advanceTime(): GameOfLife {
        const newGrid = new Grid([]);
        for (const livingCell of this._grid.liveCells) {
            const numberOfNeighbours = this._grid.findNumberOfLivingNeighbours(livingCell);
            if (this.numberOfNeighboursWhichLetCellLive.includes(numberOfNeighbours)) {
                newGrid.addLiveCell(livingCell);
            }
        }
        return new GameOfLife(newGrid);
    }

    get liveCells() {
        return this._grid.liveCells
    }
}
