const chalk = require('chalk')
const Board = require('./board')

class Game {
    constructor() {
       this.gameboard = new Board()
       this.renderBoard()
    }
    renderBoard() {
        const board = this.gameboard.createBoard()
        for(let key in board) {

            // console.log(chalk.blue(board[key]))
        }console.log(chalk.blue(JSON.stringify(board)))
    }
}
module.exports = Game