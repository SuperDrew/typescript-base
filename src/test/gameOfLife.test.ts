class Grid {
    private _aliveCells: number[][];

    constructor(aliveCells: number[][]) {
        this._aliveCells = aliveCells;
    }

    get aliveCells(): number[][] {
        return this._aliveCells;
    }

    set aliveCells(value: number[][]) {
        this._aliveCells = value;
    }

    public advanceTime(): Grid {
        const newGrid = new Grid([[]]);
        for (const element of this.aliveCells) {

        }
        return new Grid([[]])
    }
}

describe('Game of life', () => {
    it("should be able to create a grid with one alive cell at 2,3", () => {
        expect(new Grid([
            [2, 3]
        ]).aliveCells).toStrictEqual([
            [2, 3]
        ])
    });

    it("should be able to create a grid with one alive cell at 4,1", () => {
        expect(new Grid([
            [4, 1]
        ]).aliveCells).toStrictEqual([
            [4, 1]
        ])
    });

    it("should be able to advance time", () => {
        const grid = new Grid([
            [4, 1]
        ]);
        expect(grid.advanceTime() instanceof Grid).toBe(true)
    });

    it("a single live cell should die when you advance time", () => {
        const grid = new Grid([[0,0]]);
        expect(grid.advanceTime().aliveCells).toStrictEqual([[]]);
    })

    it("two live cells next to each other should die when you advance time", () => {
        const grid = new Grid([[0,0], [0,1]]);
        expect(grid.advanceTime().aliveCells).toStrictEqual([[]]);
    })

    it("grid with all cells having two or three neighbours should return the same grid when you advance time", () => {
        const grid = new Grid([[0,0], [0,1], [1,0]]);
        expect(grid.advanceTime().aliveCells).toStrictEqual(grid.aliveCells);
    })
})
