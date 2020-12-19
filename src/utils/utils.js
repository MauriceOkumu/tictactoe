const Utils = {
  pushToBoard(board, item, posX, posY) {
    board[posX][posY] === '---' ? board[posX][posY] = (`-${item}-`) : ''
  },
//   renderBoard: () => {},
//   startGame: () => {},
//   playAgainstComp: () => {},
//   playAgainstPlayer: () => {},
majorDiagonalWin: () => {},
minorDiagonalWin: () => {},
horizontalWin: (board) => {
  let res = board.filter(element => {
    return element.every((el) => {
       return el === '-X-' || el === '-O-'
    })
  })
  return res.length >= 1
},
verticalWin: () => {}


}
const positions = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2]
}
module.exports = Utils