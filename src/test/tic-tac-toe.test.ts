const ticTacToe = () => {
    return {
        currentPlayer: 'X',
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }
}

function play({ currentPlayer, board }: { currentPlayer: string, board: string[][] }, atPosition: [number, number]) {
    if (board[atPosition[0]][atPosition[1]] !== '') throw new Error('Position taken. Pick another one!')

    board[atPosition[0]][atPosition[1]] = currentPlayer;
    return {
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
        board
    }
}

const isWinner = (board: string[][]) => {
    return board[0][0]
}

describe('tic-tac-toe', () => {
    it('initial player should be X', () => {
        expect(ticTacToe().currentPlayer).toBe('X')
    });

    it('second player should be O', () => {
        const ticTacToeInstance = ticTacToe();
        const updatedTicTacToe = play(ticTacToeInstance, [0, 1])
        expect(updatedTicTacToe.currentPlayer).toBe('O')
    });

    it('third player should be X', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(ticTacToeInstance, [0, 1]), [0, 2])
        expect(updatedTicTacToe.currentPlayer).toBe('X')
    })

    it('fourth player should be O', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(play(ticTacToeInstance, [0, 0]), [0, 1]), [0, 2])
        expect(updatedTicTacToe.currentPlayer).toBe('O')
    })

    it('should return the initial state of the board', () => {
        expect(ticTacToe().board).toEqual([
            ['','',''],
            ['','',''],
            ['','','']
        ])
    });

    it('should place an X on the board when playing', () => {
        expect(play(ticTacToe(), [0,0]).board).toEqual([
            ['X','',''],
            ['','',''],
            ['','','']
        ])
    })

    it('should place an O on the board when playing', () => {
        const ticTacToeWithOneMovePlayed = play(ticTacToe(), [0,0]);
        expect(play(ticTacToeWithOneMovePlayed, [1,1]).board).toEqual([
            ['X','',''],
            ['','O',''],
            ['','','']
        ])
    })

    it('should throw an error if the position is already taken', () => {
        const ticTacToeWithOneMovePlayed = play(ticTacToe(), [0,0]);
        expect(() => play(ticTacToeWithOneMovePlayed, [0,0])).toThrowError('Position taken. Pick another one!');
    })

    it('player X should win if they have three same values in a row', () => {
        const board = [
            ['X','X','X'],
            ['','O',''],
            ['O','','']
        ]
        expect(isWinner(board)).toEqual('X')
    });

    it('player O should win if they have three same values in a row', () => {
        const board = [
            ['O','O','O'],
            ['','X',''],
            ['X','','']
        ]
        expect(isWinner(board)).toEqual('O')
    });

    it('no winner for an empty grid', () => {
        const board = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
        expect(isWinner(board)).toEqual('')
    });
})
