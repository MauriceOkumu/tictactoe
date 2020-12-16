// jest.mock('./utils', () => {
//   return {
//     pushToBoard: jest.fn(() => 42),
//     // renderBoard: jest.fn(() => {}),
//     // startGame: jest.fn(() => {}),
//     // playAgainstComp: jest.fn(() => {}),
//     // playAgainstPlayer: jest.fn(() => {}),
//   }  
// })
const Utils = require('./utils')
const mockedBoard = require('../board/board')
describe('Utils', () => {
    let board
    beforeEach(() => {
        jest.resetAllMocks()
        board = new mockedBoard().board
        Utils.pushToBoard(board, 'X', 0, 0)
        console.log(board)
    })
    afterEach(() => {
        jest.restoreAllMocks()
    })
  test ('It exist', () => {
      expect(typeof Utils).toEqual('object')
  }) 
  test('It has pushToBoard function',() => {
      let spy = jest.spyOn(Utils, 'pushToBoard').mockImplementation(() => 42)
      expect(Utils.pushToBoard()).toEqual(42)
      expect(Utils.pushToBoard).toHaveBeenCalledTimes(1)

  }) 
})