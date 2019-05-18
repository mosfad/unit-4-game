$(document).ready(function() {
var randNum = 0;
var numWins = 0;
var numLosses = 0;
var totalScore = 0;
var crystalRandOne = 0;
var crystalRandTwo = 0;
var crystalRandThree = 0;
var crystalRandFour = 0;

//reset the game variables to start a new game;
function resetGame() {
    var randNum = 0;
    var numWins = 0;
    var numLosses = 0;
    var totalScore = 0;
    var crystalRandOne = 0;
    var crystalRandTwo = 0;
    var crystalRandThree = 0;
    var crystalRandFour = 0;
}

//randomly generates a number and displays it.
function generateRandomNumber() {
    //generates a random number betwen 19 to 120.
    randNum = Math.floor(Math.random() * 102) + 19;
    //(Math.random * 102 gives you numbers [0.something, 101.something])
}

//randomly generates a number for each of the crystal buttons.
function generateRandCyrstals() {
    //generates random numbers between 1 to 12
    crystalRandOne = Math.ceil(Math.random() * 12);
    crystalRandTwo = Math.ceil(Math.random() * 12);
    crystalRandThree = Math.ceil(Math.random() * 12);
    crystalRandFour = Math.ceil(Math.random() * 12);
}
//var buttonCheck = $(".buttons-crystals").html();
//console.log(buttonCheck);
//generate all the random numbers required to start the game.
generateRandomNumber();
generateRandCyrstals();
console.log(randNum);
console.log(crystalRandOne);
console.log(crystalRandTwo);
console.log(crystalRandThree);
console.log(crystalRandFour);


//run the click event for the crystal buttons
$(".crystals").click(function() {
    console.log("I am inside the click event");
    //Get the id of the clicked crystal button
    var idButtonClicked = $(this).attr("id");
  
    //if the clicked button matches any of the crystals, add corresponding point to the user's score
    if (idButtonClicked=== "crystal-1") {
        totalScore += crystalRandOne;
        console.log("total score after clicking button 1 is " + totalScore);
        
    }
    else if (idButtonClicked === "crystal-2") {
        totalScore += crystalRandTwo;
        console.log("total score after clicking button 2 is " + totalScore);
    }
    else if (idButtonClicked === "crystal-3") {
        totalScore += crystalRandThree;
        console.log("total score after clicking button 3 is " + totalScore);
    }
    else if (idButtonClicked === "crystal-4") {
        totalScore += crystalRandFour;
        console.log("total score after clicking button 4 is " + totalScore);
    }
    
    //if the total score is equal to or above the random num
    
})

})