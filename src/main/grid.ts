export class Grid {
    private _liveCells: [number, number][];

    constructor(liveCells: [number, number][]) {
        this._liveCells = liveCells;
    }

    get liveCells(): [number, number][] {
        return this._liveCells;
    }

    set liveCells(value: [number, number][]) {
        this._liveCells = value;
    }

    public addLiveCell(value: [number, number]) {
        this.liveCells.push(value);
    }

    private isAdjacent(cell1: [number, number], cell2: [number, number]) {
        const distance = Math.abs(cell1[0] - cell2[0]) + Math.abs(cell1[1] - cell2[1]);
        return distance <= 2 && distance > 0;
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
}



