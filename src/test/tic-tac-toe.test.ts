// 2 players: 1 = x; 2 = 0
// board = [[],[],[]]

const initialPlayer = () => {
    return 'X'
}

describe('tic-tac-toe', () => {
    it('initial player should be X', () => {  
        expect(initialPlayer()).toBe('X')
    })
})
