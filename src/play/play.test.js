const { TestScheduler } = require("jest")

const Play = require('./play')
describe('Play', () => {
    test('It is defined', () => {
        const game = new Play()
        // game.playGame()
        expect(game).toBeDefined()
    })
})