// Gets computer's choice
function getComputerChoice()
{
    // Randomly select rock, paper, or scissors
    let randomizer = Math.floor(Math.random() * 3) + 1;

    switch (randomizer)
    {
        case 1:
            return computerChoice = "rock";
        case 2:
            return computerChoice = "paper";
        case 3:
            return computerChoice = "scissors";
    }
}

function getPlayerChoice()
{
    let choice = prompt("What hand would you like to throw?");
    return choice;
}

// Plays a round of rock paper scissors
function playRound(playerSelection, computerSelection)
{
    // Capitalizes a word
    capitalize = word => {
        return word.substr(0,1).toUpperCase().concat(word.substr(1).toLowerCase());
    };

    // Play a single round
    if (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper"  && playerSelection.toLowerCase() !== "scissors")
    {
        alert("Invalid choice please choose between Rock, Paper, and Scissors");
        restartGame();
        throw Error("Wrong Input");
    }
    else if (playerSelection.toLowerCase() === computerSelection)
    {
        alert(`Tie! both picked ${capitalize(computerSelection)}`);
        playerWins++;
        computerWins++
    }
    else if (playerSelection.toLowerCase() === "rock")
    {
        if (computerSelection === "scissors")
        {
            alert("You Win! Rock beats Scissors");
            playerWins++;
        }
        else if (computerSelection === "paper")
        {
            alert("You Lose! Paper beats Rock");
            computerWins++;
        }
    }
    else if (playerSelection.toLowerCase() === "paper")
    {
        if (computerSelection === "scissors")
        {
            alert("You Lose! Scissors beats Paper");
            computerWins++;
        }
        else if (computerSelection === "rock")
        {
            alert("You Win! Paper beats Rock");
            playerWins++;
        }
    }
    else if (playerSelection.toLowerCase() === "scissors")
    {
        if (computerSelection === "rock")
        {
            alert("You Lose! Rock beats Scissors");
            playerWins++;
        }
        else if (computerSelection === "paper")
        {
            alert("You Win! Scissors beats Paper");
            computerWins++;
        }
    }
}

let playerWins = 0;
let computerWins = 0;

let continueGame = true;

// Start a game of rock paper scissors
function playGame()
{
    // Play a game of rock paper scissors
    alert("This is a game of Rock, Paper, and Scissors\n\nPlay against the computer by choosing between: \nRock, Paper, and Scissors");
    let rounds = Number(prompt("How many rounds would you like to play?"));

    if (isNaN(rounds) || rounds === 0) 
    {
        alert("Invalid choice please choose a number greater than 1");
        restartGame();
        throw Error("Wrong Input");
    }

    let currentRound = 0
    
    while (currentRound < rounds)
    {
        playRound(getPlayerChoice(), getComputerChoice());
        currentRound++;
    }

    alert(`Final Score\n\nPlayer:   ${playerWins}\nComputer:    ${computerWins}`);
    
    if (playerWins > computerWins)
    {
        alert("Player wins the game!");
    }
    else if (playerWins < computerWins)
    {
        alert("Computer wins the game!");
    }
    else
    {
        alert("It's a tie!");
    }

    restartGame();
}

function restartGame()
{
    restart = prompt("Play Again? Yes or No");
    switch (restart.toLowerCase())
    {
        case "yes":
            continueGame = true;
            break;
        case "no":
            continueGame = false;
            break;
        default:
            continueGame = false;
            return;
    }
}

while (continueGame)
{
    playerWins = 0;
    computerWins = 0;
    playGame();
}