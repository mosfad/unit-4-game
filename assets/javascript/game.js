$(document).ready(function() {
//complete reset with no record of wins and losses.
var randNum = 0;
var numWins = 0;
var numLosses = 0;
var totalScore = 0;
var crystalRandOne = 0;
var crystalRandTwo = 0;
var crystalRandThree = 0;
var crystalRandFour = 0;
//flag states whether a win/loss message is being displayed.
var gameStatus = false; 

//reset the game variables to start a new game;
function resetGame() {
    randNum = 0;
    //don't reset number of wins and losses.
    //numWins = 0;
    //numLosses = 0;
    totalScore = 0;
    crystalRandOne = 0;
    crystalRandTwo = 0;
    crystalRandThree = 0;
    crystalRandFour = 0;
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

//generate all the random numbers required to start the game.
generateRandomNumber();
generateRandCyrstals();
console.log(randNum);
console.log(crystalRandOne);
console.log(crystalRandTwo);
console.log(crystalRandThree);
console.log(crystalRandFour);

console.log($("#random-number p").html());
console.log($("#random-number").html());

//start the game by showing the user the generated random number
$("#random-number p").text(randNum);

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
    //show the user the total score so far
    $("#total-score p").text(totalScore);
    
    //if the total score is equal to or above the random number, update wins and losses and start a new game.
    if (totalScore === randNum) {
        //user wins this game, so increment number of wins.
        numWins++;
        //add a message showing user won this round
        if (gameStatus == false){
            $(".gameStats").prepend("<p id='game_status'>You won!!</p><br>");
            gameStatus = true;
        }
        else{
            $("#game_status").text("You won!!");
        }
        //show the user the number of wins so far
        $("#number-wins span").text(numWins);
        //start a new game
        resetGame();
        generateRandomNumber();
        generateRandCyrstals();
        //show user the newly generated random number to start the new game.
        $("#random-number p").text(randNum);
        //show user the that the total score has been reset.
        $("#total-score p").text(totalScore);
        console.log("I won!!!!" + " Number of wins are " + numWins);
        console.log(randNum);
        console.log(crystalRandOne);
        console.log(crystalRandTwo);
        console.log(crystalRandThree);
        console.log(crystalRandFour);
    }
    else if (totalScore > randNum) {
        //user losses this game, so decrement number of losses.
        numLosses++;
        //show user the newly generated random number to start the new game.
        if (gameStatus == false){
            $(".gameStats").prepend("<p id='game_status'>You lost!!</p><br>");
            gameStatus = true;
        }
        else{
            $("#game_status").text("You lost!!");
        }
        //show the user the number of losses so far
        $("#number-losses span").text(numLosses);
        //start a new game
        resetGame();
        generateRandomNumber();
        generateRandCyrstals();
        //show user the newly generated random number to start the new game.
        $("#random-number p").text(randNum);
        //show user the that the total score has been reset.
        $("#total-score p").text(totalScore);
        console.log("I lost." + " Number of losses are " + numLosses);
        console.log(randNum);
        console.log(crystalRandOne);
        console.log(crystalRandTwo);
        console.log(crystalRandThree);
        console.log(crystalRandFour);

    }

    
})

})