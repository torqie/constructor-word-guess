
function Letter(letter) {
  this.character = letter;
  this.hasBeenGuessed = false;

  this.returnLetter = function () {
    if(this.hasBeenGuessed) {
      return this.character;
    } else {
      return "_";
    }
  }

  this.guess = function (character) {
    if(character === this.character) {
      this.hasBeenGuessed = true;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Letter;