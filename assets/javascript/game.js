//game.js
//Create word array
var words = [
"lion",
"tiger",
"bear",
"dog",
"cat",
"seal", 
"zebra", 
"elephant", 
"hamster", 
"rat", 
"camel", 
"porcupine", 
"bird", 
"monkey", 
"giraffe"];

//Choose a random word 

var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];
var numDash = [];
//console.log(chosenWord);

//Create '_' based on word length

var createDash = function() {
	for (var i = 0; i < chosenWord.length; i++){
		numDash.push('_');
	}
	return numDash;
}

//console.log(createDash());

//Get User Guess
//Check if letter in Guess
//If Right push to win area
//If wrong push to loss area



