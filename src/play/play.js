const readline = require('readline')
const chalk = require('chalk')
const Game = require('../game/game')
class Play {
    constructor(){
        this.game = null
    }
    playGame() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          })
          rl.question('Are you ready to play tic-tac-toe? ', (answer) => {
            console.log(chalk.greenBright(`\n             BOARD \n`))
          answer === 'yes'? this.game = new Game() :''
            rl.close()
    })
 }
}

module.exports = Play