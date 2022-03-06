

let playerPoints = 0;
let computerPoint = 0;

console.log(playRound("ROCK","PAPER"));
console.log(playRound("PAPER","PAPER"));
console.log(playRound("SISSORS","PAPER"));
console.log(playRound("PAPER","ROCK"));
console.log(playRound("ROCK","ROCK"));


// New variable playerPoints with value 0
// New variable computerPoints with value 0
// playGamecd  



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
            return "PAPPER";
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
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        case -1:
            computerPoint++;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        case 0:
            return "Tie!";

    }

//     Make a variable called result and set it to 0
//     Based on value of playerSelection:
//         "ROCK" = Based of value of computerSelection:
//             "ROCK" = 0
//             "PAPER" = -1
//             "SISSORS" = 1
//         "PAPER" = Based of value of computerSelection:
//             "ROCK" = 1
//             "PAPER" = 0
//             "SISSORS" = -1
//         "SISSORS" = Based of value of computerSelection:
//             "ROCK" = -1
//             "PAPER" = 1
//             "SISSORS" = 0
//     Based on value of Result:
//         -1: 
//             Give Player 1 Point
//             Return `You win! ${playerSelction} beats ${computerSelection}!`
//         0:
//             Return `Tie!!`
//         1:
//             Give Computer 1 Point
//             Return `You lose! ${computerSelection} beats ${playerSelection}!`
}

// playGame Function
//     Loop 5 times:
//         playerSelection = playerPlay
//         computerSelection = computerPlay
//         playRound


