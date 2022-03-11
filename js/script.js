

let playerPoints = 0;
let computerPoints = 0;



//playGame();

let lastResult = 0;

let resultsText = document.querySelector(".results");

const battleBoxes = document.querySelectorAll(".battleBox");
const playerScore = battleBoxes[0].querySelector(".score");
const cpuScore = battleBoxes[1].querySelector(".score");
const playerAvatar = battleBoxes[0].querySelector(".avatar");
const cpuAvatar = battleBoxes[1].querySelector(".avatar");

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

    lastResult = result;

    switch (result) {
        case 1:
            playerPoints++;
            return `You win the round! ${playerSelection} beats ${computerSelection}!`;
        case -1:
            computerPoints++;
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
    console.log(`Computer won ${computerPoints} rounds.`);
    if (playerPoints > computerPoints) {
        console.log("You win the game!");
    } else if (playerPoints < computerPoints) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game was a tie!");
    }
}




const buttons = document.querySelectorAll(".choiceButton");

buttons.forEach(button => { button.addEventListener("click",(e) => {
        let gameString = "";
        let playerSelection = e.target.getAttribute("data-choice");
        gameString = gameString + (`You chose: ${playerSelection}. `);
        let computerSelection = computerPlay();
        gameString = gameString + (`Computer chose: ${computerSelection}. `);
        gameString = gameString + (playRound(playerSelection,computerSelection));


        buttons.forEach( (button) => button.disabled = true);
        updateAvatars(playerSelection,computerSelection);
        updateScore();

        setTimeout(() => {
            setResultsText(gameString);
            setWinnerAvatar(lastResult);
        }, 1000);

        setTimeout(() => {
            setResultsText("Play again?");
            setWinnerAvatar(0);
            updateAvatars("DEFAULT","DEFAULT");
            buttons.forEach( (button) => button.disabled = false);
        }, 3000);
    });
});

function setWinnerAvatar(result) {
    console.log("TEST")
    switch (result) {
        case 1:
            playerAvatar.classList.add("winner");
            playerAvatar.classList.remove("loser");
            cpuAvatar.classList.add("loser");
            cpuAvatar.classList.remove("winner");
            break;
        case -1:
            cpuAvatar.classList.add("winner");
            cpuAvatar.classList.remove("loser");
            playerAvatar.classList.add("loser");
            playerAvatar.classList.remove("winner");
            break;
        case 0:
            cpuAvatar.classList.remove("winner");
            cpuAvatar.classList.remove("loser");
            playerAvatar.classList.remove("loser");
            playerAvatar.classList.remove("winner");
            break;
    }
}


function updateAvatars( playerString, cpuString) {
    switch (playerString) {
        case "ROCK": playerAvatar.textContent = "👊";
        playerAvatar.classList.remove("bigText");
        break;
        case "PAPER": playerAvatar.textContent = "🤚";
        playerAvatar.classList.remove("bigText");
        break;
        case "SISSORS": playerAvatar.textContent = "✌";
        playerAvatar.classList.add("bigText");
        break;
        case "DEFAULT": playerAvatar.textContent = "😊";
        playerAvatar.classList.remove("bigText");
    }
    switch (cpuString) {
        case "ROCK": cpuAvatar.textContent = "👊";
        cpuAvatar.classList.remove("bigText");
        break;
        case "PAPER": cpuAvatar.textContent = "🤚";
        cpuAvatar.classList.remove("bigText");
        break;
        case "SISSORS": cpuAvatar.textContent = "✌";
        cpuAvatar.classList.add("bigText");
        break;
        case "DEFAULT": cpuAvatar.textContent = "💻";
        cpuAvatar.classList.remove("bigText");
    }
}


function updateScore() {
    playerScore.textContent = "Wins: " + getStarString(playerPoints);
    cpuScore.textContent = "Wins: " + getStarString(computerPoints);
}

function getStarString( starCount ) {
    let string = "";
    for (let i = 0; i < starCount; i++) {
        string = string + "☆";
    }
    return string
}

function setResultsText(string) {
    resultsText.textContent = string;
}
   

// playGame Function
//     Loop 5 times:
//         playerSelection = playerPlay
//         computerSelection = computerPlay
//         playRound


