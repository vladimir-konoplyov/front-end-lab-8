// Task2: Guessing game

(function() {

// Init variables
var startGameQuestion= confirm("Do you want to play a game");
var rangeStart = 0,
    rangeEnd = 5,
    attempt = 1,
    gameLoop = 0,
    sumWin = 0,
    totalWin = 0,
    currentPrize = 0, 
    possiblePrize = 10;

// If user don't wanna play game and pressed Cancel button for "Confirm"
if (!startGameQuestion) {
    console.log("You did not become a millionaire!");
// If user begins to play game
} else {
    // Init game loop
    while (gameLoop < 99999) {
        currentPrize = possiblePrize;
        // Set random number, that user should guess 
        var randomNumber = Number(Math.random() * rangeEnd).toFixed(0);
        // Set 3 attempts to guess number
        for (var i = 1; i <= 3; i++) {
            var enteredNumber = prompt("Enter a number from " + rangeStart + "to " + rangeEnd + "\nAttempts left: " + i + "\nTotal prize: " + sumWin + "$" + "\nPossible prize on current attempt: " + currentPrize + "$", "0");
            // If user pressed Cancel button for "Prompt" or user used 3 attempts and didn't guess a number
            if (enteredNumber === null || (randomNumber !== enteredNumber && i==3)) {
                sumWin = 0;
                rangeEnd = 5;
                possiblePrize = 10;
                break;
            }
            // If user guessed a number
            else if (randomNumber == enteredNumber) {
                sumWin += currentPrize;
                rangeEnd *= 2;
                possiblePrize *= 3;
                break;
            }
            // If user didn't guess a number but has some attempts
            else {
                currentPrize = Math.floor(currentPrize / 2);
            } 
        }
        gameLoop++;
        console.log('Thank you for a game. Your prize is: ' + sumWin + "$");
        var continueGameQuestion = confirm("Do you want to play again? ");
        // If user don't wanna to continue play game
        if (!continueGameQuestion) {
            break;
        }
    }
}

})();