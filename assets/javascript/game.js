
//Arrays
var teamOptions  = ["broncos", "chiefs", "raiders", "chargers"];
var pickWord = ""
var lettersinWord = [];
var numBlanks = 0;
var blankandCorrect = [];
var wrongLetters = [];

//Calculator
var winCalculator = 0;
var lossCalculator = 0;
var guessesRemaining = 5;


function startGame () {
	pickWord = teamOptions[Math.floor(Math.random() * teamOptions.length)];
}
