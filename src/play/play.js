const readline = require('readline')
const chalk = require('chalk')
const Game = require('../game/game')
class Play {
    constructor(){
        this.game = null
        // this.playGame()
    }
    async playGame() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          })
          rl.question('Are you ready to play tic-tac-toe? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(chalk.greenBright(`Thank you for your valuable feedback: ${answer}`))
          
            rl.close()
    })
 }
}
new Play().playGame()

module.exports = Play