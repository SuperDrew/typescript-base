const player = {
    one: 'X',
    two: 'O'
}

const ticTacToe = (width = 3, height = 3) => {
    return {
        currentPlayer: player.one,
        board:  [...Array(height)].map(_ => [...Array(width)].map(_ => ''))
    }
}

const play = ({ currentPlayer, board }: { currentPlayer: string, board: string[][] }, atPosition: [number, number]) => {
    if (board[atPosition[0]][atPosition[1]] !== '') throw new Error('Position taken. Pick another one!')

    board[atPosition[0]][atPosition[1]] = currentPlayer;
    return {
        currentPlayer: currentPlayer === player.one ? player.two : player.one,
        board
    }
}

const getWinner = (board: string[][]) => {
    const checkRow = (row: number) => {
        const difference = board[row].find(value => board[row][0] !== value)
        return difference === undefined ? board[row][0] : '';
    }

    const checkColumn = (column: number) => {
        return (board[0][column] === board[1][column]) && (board[0][column] == board[2][column]) ? board[0][column] : '';
    }

    const checkDiagonals = () => {
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
        return '';
    }

    for (let i = 0; i < board.length; i++) {
        const winner = checkRow(i)
        if (winner) return winner;
    }

    for (let i = 0; i < board[0].length ; i++) {
        const winner = checkColumn(i);
        if (winner) return winner;
    }

    return checkDiagonals() || '';
}

const isDraw = (board: string[][]) => getWinner(board) ? false : true;

describe('tic-tac-toe', () => {
    it('initial player should be player one', () => {
        expect(ticTacToe().currentPlayer).toBe(player.one)
    });

    it('second player should be player two', () => {
        const ticTacToeInstance = ticTacToe();
        const updatedTicTacToe = play(ticTacToeInstance, [0, 1])
        expect(updatedTicTacToe.currentPlayer).toBe(player.two)
    });

    it('third player should be again player one', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(ticTacToeInstance, [0, 1]), [0, 2])
        expect(updatedTicTacToe.currentPlayer).toBe(player.one)
    })

    it('fourth player should be again player two', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(play(ticTacToeInstance, [0, 0]), [0, 1]), [0, 2])
        expect(updatedTicTacToe.currentPlayer).toBe(player.two)
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

    it('player one should win if they have three same values in a row', () => {
        expect(getWinner([
            ['X','X','X'],
            ['','O',''],
            ['O','','']
        ])).toEqual(player.one)

        expect(getWinner([
            ['','O',''],
            ['X','X','X'],
            ['O','','']
        ])).toEqual(player.one)

        expect(getWinner([
            ['','O',''],
            ['','O',''],
            ['X','X','X']
        ])).toEqual(player.one)
    });

    it('player two should win if they have three same values in a row', () => {
        expect(getWinner([
            ['O','O','O'],
            ['','X',''],
            ['X','','']
        ])).toEqual(player.two)

        expect(getWinner([
            ['','X',''],
            ['O','O','O'],
            ['X','','']
        ])).toEqual(player.two)

        expect(getWinner([
            ['','X',''],
            ['','O',''],
            ['O','O','O']
        ])).toEqual(player.two)
    });

    it('player one should win if they have three same values in a column', () => {
        expect(getWinner([
            ['X','',''],
            ['X','O',''],
            ['X','','O']
        ])).toEqual(player.one);

        expect(getWinner([
            ['','X',''],
            ['O','X',''],
            ['','X','O']
        ])).toEqual(player.one)

        expect(getWinner([
            ['','','X'],
            ['O','O','X'],
            ['','','X']
        ])).toEqual(player.one)
    });

    it('player two should win if they have three same values in a column', () => {
        expect(getWinner([
            ['O','',''],
            ['O','X',''],
            ['O','','X']
        ])).toEqual(player.two);

        expect(getWinner([
            ['','O',''],
            ['X','O',''],
            ['','O','X']
        ])).toEqual(player.two)

        expect(getWinner([
            ['','','O'],
            ['X','X','O'],
            ['','','O']
        ])).toEqual(player.two)
    });

    it('player two should win if they have three same values in a diagonal', () => {
        expect(getWinner([
            ['O','',''],
            ['X','O',''],
            ['X','','O']
        ])).toEqual(player.two);

        expect(getWinner([
            ['','','O'],
            ['X','O',''],
            ['O','','X']
        ])).toEqual(player.two);
    })

    it('player one should win if they have three same values in a diagonal', () => {
        expect(getWinner([
            ['X','',''],
            ['O','X',''],
            ['O','','X']
        ])).toEqual(player.one);

        expect(getWinner([
            ['','','X'],
            ['O','X',''],
            ['X','','O']
        ])).toEqual(player.one);
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
        expect(getWinner(board)).not.toEqual('')
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

    describe('4 x 4 board', () => {
        it('player one should win if they have three same values in a row', () => {
            expect(getWinner([
                ['', 'O', '', ''],
                ['O', '', '', ''],
                ['O', '', '', ''],
                ['X', 'X', 'X', 'X']
            ])).toEqual(player.one)
        })
    });
})
