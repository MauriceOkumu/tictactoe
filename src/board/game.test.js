const Game = require('./game')

describe('Game', () => {
    let game
    beforeEach(() => {
        game = new Game()
    })
    afterEach(() => {
        game = null
    })
  test('It exists', () => {
      expect(game).toBeDefined()
  })
  test('it has a game board', () => {
      expect(game.gameboard).toBeDefined()
  })
})