const Letter = require("./Letter.js");

function Word(word) {
  this.word = word.split("");
  this.correct = false;
  this.letters = this.word.map(function(letter) {
    return new Letter(letter);
  });

  this.check = function(char) {
    this.correct = false;

    for(let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i];
      if(letter.guess(char)) {
        this.correct = true;
      }
    }
    this.display()
  };

  this.display = function() {
    if(this.correct) {
      console.log("Correct: ", );
    } else {
      console.log("Incorrect: ", );
    }
    
    let word = "";
    for(let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i];
      word += letter.returnLetter();
    }
    console.log(word);
    const numCorrect = this.letters.filter(letter => letter.hasBeenGuessed);

    if(numCorrect.length === this.letters.length) {
      console.log("Gnarly, You Won!");
    }
  };

}

module.exports = Word;