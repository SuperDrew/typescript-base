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

            const zombies = this._grid.findZombieNeighbours(livingCell);
            console.log("livincell: " + livingCell);
            for (const zombie of zombies) {
                console.log("zombie" + zombie);
                var numberOfLivingNeighbours = this._grid.findNumberOfLivingNeighbours(zombie);
                console.log(numberOfLivingNeighbours)
                if (numberOfLivingNeighbours === 3) {
                    newGrid.addLiveCell(zombie);
                }
            }
        }
        return new GameOfLife(newGrid);
    }

    get liveCells() {
        return this._grid.liveCells
    }
}
