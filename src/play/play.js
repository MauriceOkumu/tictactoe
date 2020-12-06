const readline = require('readline')
const chalk = require('chalk')
const Game = require('../game/game')
class Play {
    constructor(){
        this.game = null
    }
    playGame() {
    
    this.getUserInput(() => {
      this.game = new Game()
    })
 }
    getUserInput = (fn) => {
    const { stdin, stdout } = process;
    const rl = readline.createInterface({ input: stdin, output: stdout });
    rl.question("Are you ready to play TIC_TAC_TOE? Y/N  ", (answer) => {
      if (answer.toLowerCase() === "y") {
        console.log(chalk.greenBright(`\n             BOARD \n`))
        fn();
      }
      rl.close();
    })
  }
}

module.exports = Play