// Description of game: 
// write a program where a person plays against a computer in a game of 
// rock paper scissors

// Pseudocode:
// create a variable called choice for user input
// create an array of 3 with the strings Rock, Paper, and Scissors

// the program asks the user for input to pick between rock, paper, and scissors and stores it 
// in the variable choice - make 1, 2, 3 the input choices for rock, paper and scissors 

// create a function so that the computer randomly chooses a number between 1 and 3 with 1 being rock and 3 being scissors 
// and store it in a variable computerChoice

// create a function that takes both choices and have conditional statements that depict each possible outcome and in each conditional return the winner
// if they tie set an else statement at the end to redo the game
//set a winner variable to false
// set a while loop that continues running the function until a winner is apparent 

let choiceString = ["","Rock", "Paper", "Scissors"]; //the first index is empty as the user choice begins at index 1
let choice = parseInt(prompt("Choose 1 for Rock, 2 for paper, and 3 for scissors."));
let computerChoice = getComputerChoice();
let selectionOutputString = `Your selection is: ${choiceString[choice]} and the computers selection is: ${choiceString[computerChoice]}\n`;
let computerWinnerString = "The winner of this game is the computer!";
let userWinnerString = "The winner of this game is you! Congrats!!";
let winner = false;


while (winner == false) {
    if (choice < 1 || choice > 3) {
        choice = parseInt(prompt("Invalid choice, please choose again. Choose 1 for Rock, 2 for paper, and 3 for scissors."));
        continue;
    }
    winner = getWinner(choice, computerChoice);
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1); //random integer between 1 (inclusive) and 3 
    return computerChoice;
}

function getWinner(choice, computerChoice) {
    let selectionOutputString = `Your selection is: ${choiceString[choice]} and the computers selection is: ${choiceString[computerChoice]}\n`;
    switch (true) {
        case choice === 1 && computerChoice === 3:
            alert(selectionOutputString + userWinnerString);
            winner = true;
            break;
        case choice === 2 && computerChoice === 1:
            alert(selectionOutputString + userWinnerString);
            winner = true;
            break;
        case choice === 2 && computerChoice === 3:
            alert(selectionOutputString + computerWinnerString);
            winner = true;
            break;
        case choice === 3 && computerChoice === 1:
            alert(selectionOutputString + computerWinnerString);
            winner = true;
            break;
        case choice === 3 && computerChoice === 2:
            alert(selectionOutputString + userWinnerString);
            winner = true;
            break;
        default:
            alert(selectionOutputString);
            alert("The game is tied, please play again!");
            winner = false;
    }
    // if (!winner) {
    //     choice = parseInt(prompt("Play again! Choose 1 for Rock, 2 for paper, and 3 for scissors."));
    //     computerChoice = getComputerChoice();
    //     selectionOutputString = `Your selection is: ${choiceString[choice]}\n and the computers selection is: ${choiceString[computerChoice]}\n`;
    // }
    return winner;
}



