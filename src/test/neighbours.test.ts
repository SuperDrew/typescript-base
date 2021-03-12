export class Grid {
    private _liveCells: number[][];

    constructor(liveCells: number[][]) {
        this._liveCells = liveCells;
    }
    get liveCells(): number[][] {
        return this._liveCells;
    }

    set liveCells(value: number[][]) {
        this._liveCells = value;
    }

    public addLiveCell(value: number[]) {
        this.liveCells.push(value);
    }

}

// describe('Neighbours', () => {
//
//     it('should get the living neighbours of a cell', () => {
//         expect(findLivingNeighbours(new Grid([0, 0]), [0,0])).toBe([])
//     });
// });
