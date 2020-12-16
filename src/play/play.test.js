const readline = require('readline')
jest.mock('readline')
jest.mock('../game/game')

const Play = require('./play')
describe('Play', () => {
    let game
    beforeEach(() => {
        game = new Play()
    })
    afterEach(() => {
        game = null
    })
    test('It is defined', () => {
        
        expect(game).toBeDefined()
    })
    test("should execute a cb when user prompt in cli y", () => {
        const mock = jest.fn();
        game.getUserInput (mock) 
        expect(mock).toHaveBeenCalledTimes(1)
        expect(mock).toHaveBeenCalled();
     })
})

 