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
    if (playerSelection.toLowerCase() === computerSelection)
    {
        results.textContent = `Tie! both picked ${computerSelection}`;
        playerWins++;
        computerWins++
    }
    else if (playerSelection.toLowerCase() === "rock")
    {
        if (computerSelection === "scissors")
        {
            results.textContent = "You Win! Rock beats Scissors";
            playerWins++;
        }
        else if (computerSelection === "paper")
        {
            results.textContent = "You Lose! Paper beats Rock";
            computerWins++;
        }
    }
    else if (playerSelection.toLowerCase() === "paper")
    {
        if (computerSelection === "scissors")
        {
            results.textContent = "You Lose! Scissors beats Paper";
            computerWins++;
        }
        else if (computerSelection === "rock")
        {
            results.textContent = "You Win! Paper beats Rock";
            playerWins++;
        }
    }
    else if (playerSelection.toLowerCase() === "scissors")
    {
        if (computerSelection === "rock")
        {
            results.textContent = "You Lose! Rock beats Scissors";
            computerWins++;
        }
        else if (computerSelection === "paper")
        {
            results.textContent = "You Win! Scissors beats Paper";
            playerWins++;
        }
    }
    scoreRound();
    scorePlayers();
}

function scorePlayers ()
{
    if (playerWins === 5 && computerWins === 5)
    {
        results.textContent += "\nIt's a tie!";
        return continueGame = false;
    }
    else if (playerWins === 5)
    {
        results.textContent += "\nPlayer wins the game!";
        return continueGame = false;
    }
    else if (computerWins === 5)
    {
        results.textContent += "\nComputer wins the game!";
        return continueGame = false;
    }
}

let playerWins = 0;
let computerWins = 0;
let continueGame = true;

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');

const results = document.querySelector('#results');
const scores = document.querySelector('#scores');

const scoreRound = () => {
    scores.textContent = `Score\n\nPlayer:   ${playerWins}\nComputer:    ${computerWins}`;
};

scoreRound();

rockbtn.addEventListener("click", () => {
    if (continueGame)
    {
        playRound(rockbtn.name, getComputerChoice());
    }
});

paperbtn.addEventListener("click", () => {
    if (continueGame)
    {
        playRound(paperbtn.name, getComputerChoice());
    }
});

scissorsbtn.addEventListener("click", () => {
    if (continueGame)
    {
        playRound(scissorsbtn.name, getComputerChoice());
    }
});