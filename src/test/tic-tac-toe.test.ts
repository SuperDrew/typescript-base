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

function play(ticTacToeInstance: { currentPlayer: string, board: string[][] }, atPosition: [number, number] = [0, 0]) {
    return {
        currentPlayer: ticTacToeInstance.currentPlayer === 'X' ? 'O' : 'X',
        board: ticTacToeInstance.board
    }
}

describe('tic-tac-toe', () => {
    it('initial player should be X', () => {
        expect(ticTacToe().currentPlayer).toBe('X')
    });

    it('second player should be O', () => {
        const ticTacToeInstance = ticTacToe();
        const updatedTicTacToe = play(ticTacToeInstance)
        expect(updatedTicTacToe.currentPlayer).toBe('O')
    });

    it('third player should be X', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(ticTacToeInstance))
        expect(updatedTicTacToe.currentPlayer).toBe('X')
    })

    it('fourth player should be O', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(play(ticTacToeInstance)))
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
})
