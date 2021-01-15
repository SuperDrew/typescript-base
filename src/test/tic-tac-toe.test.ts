const ticTacToe = () => {
    return {
        currentPlayer: 'X'
    }
}

function play(ticTacToeInstance: { currentPlayer: string }) {
    return null;
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
})
