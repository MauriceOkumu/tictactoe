const Board = require('./board')
describe('Board', () => {
    const board = new Board()
    test('exists in the terminal', () => {
        expect(typeof board).toEqual('object')
    })
    test('shows a full board when the create method is called', () => {
        expect(Object.keys(board.createBoard()).length > 0).toBe(true)
    })
})