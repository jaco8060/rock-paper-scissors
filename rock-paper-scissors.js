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

let choiceString = { 1: "Rock", 2: "Paper", 3: "Scissors" }; // table for choices from user
// let choice = parseInt(
//   prompt("Choose 1 for Rock, 2 for paper, and 3 for scissors.")
// );
// let computerChoice = getComputerChoice();
// // let selectionOutputString = `Your selection is: ${choiceString[choice]}\nComputers selection is: ${choiceString[computerChoice]}\n`;
// // let winner = false;
let round = 0;
let userScore = 0;
let compScore = 0;
// while (round < 5) {
//   if (choice < 1 || choice > 3) {
//     choice = parseInt(
//       prompt(
//         "Invalid choice, please choose again. Choose 1 for Rock, 2 for paper, and 3 for scissors."
//       )
//     );
//     continue;
//   }

//   winner = getWinner(choice, computerChoice);

//   if (winner == "user") {
//     userScore += 1;
//     round += 1;
//     console.log(whosWinning(userScore, compScore));
//   } else if (winner == "comp") {
//     compScore += 1;
//     round += 1;
//     console.log(whosWinning(userScore, compScore));
//   } else if (winner == "tie") {
//     console.log(whosWinning(userScore, compScore));
//   }
//   if (round != 5) {
//     choice = parseInt(
//       prompt("Play again! Choose 1 for Rock, 2 for paper, and 3 for scissors.")
//     );
//     computerChoice = getComputerChoice();
//   }
// }

// if (userScore < compScore) {
//   console.log(
//     `the winner is the opponent with a final score of ${compScore}:${userScore}`
//   );
// } else if (userScore > compScore) {
//   console.log(
//     `the winner is the opponent with a final score of ${userScore}:${compScore}`
//   );
// }
function btnClick(e) {
  computerChoice = getComputerChoice();

  if (e.target.className == "btn1") {
    choice = 1;
  } else if (e.target.className == "btn2") {
    choice = 2;
  } else if (e.target.className == "btn3") {
    choice = 3;
  }

  const winnerBox = document.querySelector(".winnerBox");

  const { winner, winnerText } = getWinner(choice, computerChoice);
  // console.log(winnerText);
  if (winner == "user") {
    userScore += 1;
    round += 1;
    winnerBox.textContent = `${winnerText}
    ${whosWinning(userScore, compScore)}`;
  } else if (winner == "comp") {
    compScore += 1;
    round += 1;
    winnerBox.textContent = `${winnerText}
    ${whosWinning(userScore, compScore)}`;
  } else if (winner == "tie") {
    winnerBox.textContent = `${winnerText}
    ${whosWinning(userScore, compScore)}`;
  }
  // if (round != 5) {
  //   choice = parseInt(
  //     prompt("Play again! Choose 1 for Rock, 2 for paper, and 3 for scissors.")
  //   );
  // }
}
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", btnClick);
btn2.addEventListener("click", btnClick);
btn3.addEventListener("click", btnClick);

function whosWinning(userScore, compScore) {
  if (userScore < compScore) {
    return `Your opponent is winning with a score of ${compScore} to your score of ${userScore} \n the score is now: ${compScore}:${userScore}`;
  } else if (userScore > compScore) {
    return `You are winning with a score of ${userScore} to the computer's ${compScore} \n the score is now: ${userScore}:${compScore}`;
  } else {
    return `The game is tied! \n the score is now: ${userScore}:${compScore}`;
  }
}
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (4 - 1) + 1); //random integer between 1 (inclusive) and 3
  return computerChoice;
}

function getWinner(choice, computerChoice) {
  let selectionOutputString = `Your selection is: ${choiceString[choice]}\n and the Computers selection is: ${choiceString[computerChoice]}\n`;
  let computerWinnerString = `${choiceString[choice]} beats ${choiceString[computerChoice]}, you lost the round :(`;
  let userWinnerString = `${choiceString[choice]} beats ${choiceString[computerChoice]}, you won the round!!`;
  let winner = "";
  let winnerText = "";
  switch (true) {
    case choice === 1 && computerChoice === 3:
      winnerText = selectionOutputString + userWinnerString;
      winner = "user";
      break;
    case choice === 1 && computerChoice === 2:
      winnerText = selectionOutputString + computerWinnerString;
      winner = "comp";
      break;
    case choice === 2 && computerChoice === 1:
      winnerText = selectionOutputString + userWinnerString;
      winner = "comp";
      break;
    case choice === 2 && computerChoice === 3:
      winnerText = selectionOutputString + computerWinnerString;
      winner = "comp";
      break;
    case choice === 3 && computerChoice === 1:
      winnerText = selectionOutputString + userWinnerString;
      winner = "user";
      break;
    case choice === 3 && computerChoice === 2:
      winnerText = selectionOutputString + userWinnerString;
      winner = "user";
      break;
    default:
      winnerText = `${selectionOutputString}You and your opponent both selected ${choiceString[choice]}. No one won the round! please play again!`;
      winner = "tie";
  }

  return { winner, winnerText }; //store in an object to return multiple values
}
