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
}



