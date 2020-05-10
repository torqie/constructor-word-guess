var Word = require("./Word");
var inquier = require("inquirer");

function game() {
  this.words = ['apple', 'dragon fruit', "mango", "peach"]
  this.word = new Word(this.words[Math.floor(Math.random() * this.words.length)]);
  this.guessedLetters = [];
  //this.word = new Word("apple");

  this.check = function(){
    const numCorrect = this.word.letters.filter(letter => letter.hasBeenGuessed);

    if(numCorrect.length === this.word.letters.length) {
      console.log("Awesome, You Won!");
      return true;
    }
    return false;
  }

  this.question = function() {
    console.log("\n\nHint: Your word is a fruit");

    inquier.prompt({
      type: "input",
      message: "Guess a letter",
      name: "letter"
    }).then(answer => {
      if(answer.letter === "") {
        console.log("Please enter a letter");
        this.question();

      } else if(answer.letter.length > 1) {
        console.log("Please enter only a single letter.");
        this.question();

      } else if(this.guessedLetters.includes(answer.letter.toLowerCase())) {
        console.log("This letter has already been guessed");
        this.question();

      } else if(!answer.letter.match(/^[a-zA-Z()]$/)) {
        console.log("Sorry, You can only use letters.");
        this.question();

      } else {
        this.guessedLetters.push(answer.letter);
        this.word.check(answer.letter);
        if(this.check()) {
          console.log("========================================");
          console.log("========================================");

          inquier.prompt({
            type: "list",
            message: "Would you like to play another game?",
            choices: [{name: "Yes I do", value: true}, {name: "No I dont", value: false}],
            name: "playAgain"
          }).then(answer => {
            if(answer.playAgain) {
              new game().question();
            } else {
              return false;
            }
          });
        } else {
          this.question();
        }
        
      }
    }).catch(error => {
      console.log("Error: ", error);
    });

  }

}

new game().question();