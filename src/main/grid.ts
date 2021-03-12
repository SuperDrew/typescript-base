export class Grid {
    private _liveCells: [number, number][];

    constructor(liveCells: [number, number][]) {
        this._liveCells = liveCells;
    }

    private isAdjacent(cell1: [number, number], cell2: [number, number]) {
        const distance = Math.abs(cell1[0] - cell2[0]) + Math.abs(cell1[1] - cell2[1]);
        return distance <= 2 && distance > 0;
    }

    get liveCells(): [number, number][] {
        return this._liveCells;
    }

    public numberOfLivingCells(): number {
        return this.liveCells.length;
    }

    public addLiveCell(value: [number, number]) {
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

    public findNumberOfZombieNeighbours(cell: [number, number]) {
        return 8 - this.findNumberOfLivingNeighbours(cell);
    }

    public findNumberOfLivingNeighbours(cell: [number, number]) {
        return this.findLivingNeighbours(cell).numberOfLivingCells();
    }
}



