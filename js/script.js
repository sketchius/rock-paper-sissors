

let playerPoints = 0;
let computerPoint = 0;


playGame();



function playerPlay() {
    let inputValid = false;
    let userInput = "";

//  Loop until inputValid is true:
    while (!inputValid) {
//      Get input from user and store it in userInput
        console.log("Enter ROCK, PAPER, or SISSORS.");
        userInput = prompt();
        if (userInput != null) {
            userInput = userInput.toUpperCase();

            if (userInput == "ROCK" || userInput == "PAPER" || userInput == "SISSORS") {
                inputValid = true;
            } else {
                console.log("Invalid input!");
            }
        } else {
            console.log("Invalid input!"); 
        }
    }
    return userInput;
}



function computerPlay() {
    //    Get a random number between 0-2
    let randomNumber = Math.round(Math.random()*2);
    //    Based on value return a string
    switch (randomNumber) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SISSORS";
    }
}


// playRound function (playerSelection, computerSelection)
function playRound (playerSelection, computerSelection) {
    let result = 0;
    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    result = 0;
                    break;
                case "PAPER":
                    result = -1;
                    break;
                case "SISSORS":
                    result = 1;
                    break;
            }
            break;
            case "PAPER":
                switch (computerSelection) {
                    case "ROCK":
                        result = 1;
                        break;
                    case "PAPER":
                        result = 0;
                        break;
                    case "SISSORS":
                        result = -1;
                        break;
                }
                break;
            case "SISSORS":
                switch (computerSelection) {
                    case "ROCK":
                        result = -1;
                        break;
                    case "PAPER":
                        result = 1;
                        break;
                    case "SISSORS":
                        result = 0;
                        break;
                }
                break;
    }


    switch (result) {
        case 1:
            playerPoints++;
            return `You win the round! ${playerSelection} beats ${computerSelection}!`;
        case -1:
            computerPoint++;
            return `You lose the round! ${computerSelection} beats ${playerSelection}!`;
        case 0:
            return "Tie round!";

    }

}

function playGame() {
    console.log("Best 3 out of 5 rounds!");
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}!`);
        let playerSelection = playerPlay();
        console.log(`You chose: ${playerSelection}`);
        let computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection,computerSelection));
        console.log("=================================");
    }
    console.log("Final Score:");
    console.log(`You won ${playerPoints} rounds.`);
    console.log(`Computer won ${computerPoint} rounds.`);
    if (playerPoints > computerPoint) {
        console.log("You win the game!");
    } else if (playerPoints < computerPoint) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game was a tie!");
    }
}

// playGame Function
//     Loop 5 times:
//         playerSelection = playerPlay
//         computerSelection = computerPlay
//         playRound


