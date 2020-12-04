const chalk = require('chalk')
const Board = require('../board/board')

class Game {
    constructor() {
       this.gameboard = new Board()
       this.renderBoard()
    }
    renderBoard() {
        const board = this.gameboard.createBoard()
        board.forEach((boar) => {
            console.log('          ',chalk.redBright.bold(boar.join(' ')))
        })
        console.log('\n')
    }
}
module.exports = Game