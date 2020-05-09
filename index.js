var Word = require("./Word");
var inquier = require("inquirer");

function game() {
  this.word = new Word("apple");

  this.check = function(){
    if(this.gameOver) {
      console.log("Sorry, you ran our of lives.");
    }
    if(this.won) {
      console.log("Awesome you won!");

    }
  }

  this.question = function() {
    inquier.prompt({
      type: "input",
      message: "? Guess A Letter",
      name: "letter"
    }).then(answer => {
      this.word.check(answer.letter);
      this.question();
    }).catch(error => {
      console.log("Error: ", error);
    });
  }

}

new game().question();