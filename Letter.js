/**
 * Displays the underlying character or a underscore depending on whether or not the user has guess the letter.
 * @constructor
 */
function Letter(letter) {
  this.character = letter;
  this.hasBeenGuessed = false;

  this.returnLetter = function () {
    console.log("Has Been Guessed: ", this.hasBeenGuessed);
    
    if(this.hasBeenGuessed) {
      console.log("Correct Guess: ", this.character);
      return this.character;
    } else {
      console.log("Incorrect: _");
      return "_";
    }

  }

  this.guess = function (character) {
    if(character === this.character) {
      this.hasBeenGuessed = true;
    }
  }
}

module.exports = Letter;