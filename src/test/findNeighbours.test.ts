import {Grid} from "../main/grid";

function isCell2AboveCell1(cell1: [number, number], cell2: [number, number]) {
    return cell1[0] === cell2[0] && cell1[1] === cell2[1] + 1;
}

function findLivingNeighbours(grid: Grid, cell: [number, number]) {
    const neighbours = new Grid([]);
    for(const gridCell of grid.liveCells) {
        if(isCell2AboveCell1(gridCell, cell)) {
            neighbours.addLiveCell(gridCell);
        }
    }
    return neighbours;
}

describe('Neighbours', () => {

     it('should get the living neighbours of a cell', () => {
         const grid = new Grid([[0,0], [0,1]]);
         expect(findLivingNeighbours(grid, [0,0]).liveCells).toStrictEqual([[0,1]]);
     });
 });
