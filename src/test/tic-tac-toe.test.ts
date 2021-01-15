const ticTacToe = () => {
    return {
        currentPlayer: 'X'
    }
}

describe('tic-tac-toe', () => {
    it('initial player should be X', () => {
        expect(ticTacToe().currentPlayer).toBe('X')
    });
})
