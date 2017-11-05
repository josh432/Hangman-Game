//game.js
//Create word array
var words = [
"lion",
"tiger",
"bear",
"hyena",
"gorilla",
"leopard", 
"zebra", 
"elephant", 
"vulture", 
"wildebeest", 
"camel", 
"porcupine", 
"meerkat", 
"monkey", 
"giraffe"];

//Choose a random word 

var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];
var underScore = [];
var correctWord = [];
var wrongWord = [];
console.log(chosenWord);

var underScoreArea = document.getElementById('wordToGuess')

//Create '_' based on word length

function createDash() {
	for (var i = 0; i < chosenWord.length; i++){
		underScore.push('_');

	}
	return underScore;
}

console.log(createDash());

//Get User Guess

document.onkeyup = function(event) {
	console.log(event);
	var userGuess = event.key;
	console.log(chosenWord.indexOf(userGuess));

	//if user guesses correctly, check to see if word in generated word
	if (chosenWord.indexOf(userGuess) > -1) { //this line may need work, tricky code//
	console.log(true);

	//If Right push to win area
	correctWord.push(userGuess);
	console.log(correctWord);

	//replaces dash with correct letter
	underScore[chosenWord.indexOf(userGuess)] = userGuess;
	console.log(underScore);
	if (underScore.join('') == chosenWord) {
		alert('You Won!');
	}
	//If wrong push to loss area
	} else { 
	wrongWord.push(userGuess);
	console.log(wrongWord);
	}	
}

underScoreArea.innerHTML = "testing";









