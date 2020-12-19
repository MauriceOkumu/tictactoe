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
  test('Player wins if a pieces in a horizontal line are all the same', () => {
      Utils.pushToBoard(board, 'O', 0, 0)
    Utils.pushToBoard(board, 'O', 0, 1)
    expect(Utils.horizontalWin(board)).toEqual(false)
    Utils.pushToBoard(board, 'O', 0, 2)
    console.log(board)
    expect(Utils.horizontalWin(board)).toEqual(true)
  }) 
})