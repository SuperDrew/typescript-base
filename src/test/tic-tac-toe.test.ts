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

const play = ({ currentPlayer, board }: { currentPlayer: string, board: string[][] }, atPosition: [number, number]) => {
    if (board[atPosition[0]][atPosition[1]] !== '') throw new Error('Position taken. Pick another one!')

    board[atPosition[0]][atPosition[1]] = currentPlayer;
    return {
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
        board
    }
}

const getWinner = (board: string[][]) => {
    const checkRow = (row: number) => {
        return (board[row][0] === board[row][1]) && (board[row][0] == board[row][2]) ? board[row][0] : '';
    }

    const checkColumn = (column: number) => {
        return (board[0][column] === board[1][column]) && (board[0][column] == board[2][column]) ? board[0][column] : '';
    }

    const checkDiagonals = () => {
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
        return '';
    }

    for (let i = 0; i < 3; i++) {
        const winner = checkRow(i) || checkColumn(i);
        if (winner) return winner;
    }

    return checkDiagonals() || '';
}

const isDraw = (board: string[][]) => true;

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
        expect(getWinner([
            ['X','X','X'],
            ['','O',''],
            ['O','','']
        ])).toEqual('X')

        expect(getWinner([
            ['','O',''],
            ['X','X','X'],
            ['O','','']
        ])).toEqual('X')

        expect(getWinner([
            ['','O',''],
            ['','O',''],
            ['X','X','X']
        ])).toEqual('X')
    });

    it('player O should win if they have three same values in a row', () => {
        expect(getWinner([
            ['O','O','O'],
            ['','X',''],
            ['X','','']
        ])).toEqual('O')

        expect(getWinner([
            ['','X',''],
            ['O','O','O'],
            ['X','','']
        ])).toEqual('O')

        expect(getWinner([
            ['','X',''],
            ['','O',''],
            ['O','O','O']
        ])).toEqual('O')
    });

    it('player X should win if they have three same values in a column', () => {
        expect(getWinner([
            ['X','',''],
            ['X','O',''],
            ['X','','O']
        ])).toEqual('X');

        expect(getWinner([
            ['','X',''],
            ['O','X',''],
            ['','X','O']
        ])).toEqual('X')

        expect(getWinner([
            ['','','X'],
            ['O','O','X'],
            ['','','X']
        ])).toEqual('X')
    });

    it('player O should win if they have three same values in a column', () => {
        expect(getWinner([
            ['O','',''],
            ['O','X',''],
            ['O','','X']
        ])).toEqual('O');

        expect(getWinner([
            ['','O',''],
            ['X','O',''],
            ['','O','X']
        ])).toEqual('O')

        expect(getWinner([
            ['','','O'],
            ['X','X','O'],
            ['','','O']
        ])).toEqual('O')
    });

    it('player O should win if they have three same values in a diagonal', () => {
        expect(getWinner([
            ['O','',''],
            ['X','O',''],
            ['X','','O']
        ])).toEqual('O');

        expect(getWinner([
            ['','','O'],
            ['X','O',''],
            ['O','','X']
        ])).toEqual('O');
    })

    it('player X should win if they have three same values in a diagonal', () => {
        expect(getWinner([
            ['X','',''],
            ['O','X',''],
            ['O','','X']
        ])).toEqual('X');

        expect(getWinner([
            ['','','X'],
            ['O','X',''],
            ['X','','O']
        ])).toEqual('X');
    })

    it('no winner for an empty grid', () => {
        const board = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
        expect(getWinner(board)).toEqual('')
    });

    it('it should be a draw for a full grid with no winner', () => {
        const board = [
            ['X','O','X'],
            ['X','O','O'],
            ['O','X','X']
        ]
        expect(getWinner(board)).toEqual('')
        expect(isDraw(board)).toEqual(true)
    });

    it('it should not be a draw for a full grid with a winner', () => {
        const board = [
            ['X','X','X'],
            ['X','O','O'],
            ['O','O','X']
        ]
        expect(getWinner(board)).toEqual('X')
        expect(isDraw(board)).toEqual(false)
    });

    it('no player should win if there is not the same symbol in a row', () => {
        const board = [
            ['X','X','O'],
            ['','',''],
            ['O','','']
        ]
        expect(getWinner(board)).toEqual('')
    });
})
