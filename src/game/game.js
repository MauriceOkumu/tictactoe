const chalk = require('chalk')
const Board = require('../board/board')

class Game {
    constructor() {
       this.gameboard = new Board()
       this.renderBoard()
    }
    renderBoard() {
        const board = this.gameboard.createBoard()
        console.log(chalk.redBright.bold(`${board[0]}\n${board[1]}\n${board[2]}\n`))
    }
}
module.exports = Game