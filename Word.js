var Letter = require("./Letter.js");
function Word(word) {
  this.word = word.split("");
  this.letters = this.word.map(function(letter) {
    return new Letter(letter);
  });

  this.check = function(char) {
    for(let i = 0; i < this.letters.length; i++) {
      var letter = this.letters[i];
      letter.guess(char);
    }
    this.display()
  };

  this.display = function() {
    var word = ""
    for(let i = 0; i < this.letters.length; i++) {
      var letter = this.letters[i];
      word += letter.returnLetter();
    }
    console.log(word);
  };

}

module.exports = Word;