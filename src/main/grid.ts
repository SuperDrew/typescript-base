export class Grid {
    private _liveCells: [number, number][];

    constructor(liveCells: [number, number][]) {
        this._liveCells = liveCells;
    }

    private isAdjacent(cell1: [number, number], cell2: [number, number]) {
        const horizontalDistance = Math.abs(cell1[0] - cell2[0]);
        const verticalDistance = Math.abs(cell1[1] - cell2[1]);
        if (horizontalDistance == 0 && verticalDistance == 0) return false;
        return horizontalDistance <= 1 && verticalDistance <= 1;
    }

    get liveCells(): [number, number][] {
        return this._liveCells;
    }

    public numberOfLivingCells(): number {
        return this.liveCells.length;
    }

    public addLiveCell(value: [number, number]) {
        if (!this.liveCells.find(x => x[0] == value[0] && x[1] == value[1]))
            this.liveCells.push(value);
    }

    public findLivingNeighbours(cell: [number, number]) {
        const neighbours = new Grid([]);
        for(const gridCell of this.liveCells) {
            if(this.isAdjacent(gridCell, cell)) {
                neighbours.addLiveCell(gridCell);
            }
        }
        return neighbours;
    }

    public findZombieNeighbours(cell: [number, number]) {
        const zombies: [number,number][] = [];
        const adjacentCells: [number,number][] = [
            [cell[0], cell[1]+1],
            [cell[0]+1, cell[1]+1],
            [cell[0]+1, cell[1]],
            [cell[0]+1, cell[1]-1],
            [cell[0], cell[1]-1],
            [cell[0]-1, cell[1]-1],
            [cell[0]-1, cell[1]],
            [cell[0]-1, cell[1]+1]
        ];
        for(const adjacentCell of adjacentCells) {
            if (!this.liveCells.find(x => x[0] == adjacentCell[0] && x[1] == adjacentCell[1])) {
                zombies.push(adjacentCell);
            }
        }

        return zombies;
    }

    public findNumberOfZombieNeighbours(cell: [number, number]) {
        return 8 - this.findNumberOfLivingNeighbours(cell);
    }

    public findNumberOfLivingNeighbours(cell: [number, number]) {
        return this.findLivingNeighbours(cell).numberOfLivingCells();
    }
}



