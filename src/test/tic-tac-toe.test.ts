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

function play(ticTacToeInstance: { currentPlayer: string }) {
    return {
        currentPlayer: ticTacToeInstance.currentPlayer === 'X' ? 'O' : 'X'
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
    })
})
