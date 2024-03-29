let choiceString = { 1: "Rock", 2: "Paper", 3: "Scissors" }; // table for choices from user

let round = 0;
let userScore = 0;
let compScore = 0;
//main
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", btnClick);
btn2.addEventListener("click", btnClick);
btn3.addEventListener("click", btnClick);
function btnClick(e) {
  let choiceString = { 1: "Rock", 2: "Paper", 3: "Scissors" }; // table for choices from user

  // btn1.disabled = true;
  // btn2.disabled = true;
  // btn3.disabled = true;

  computerChoice = getComputerChoice();

  if (e.target.className == "btn1") {
    choice = 1;
  } else if (e.target.className == "btn2") {
    choice = 2;
  } else if (e.target.className == "btn3") {
    choice = 3;
  }

  const winnerBox = document.querySelector(".winnerBox");
  const scoreBox = document.querySelector(".scoreBox");

  const { winner, winnerText } = getWinner(choice, computerChoice);
  console.log(choice, computerChoice);
  console.log(winner, winnerText);
  console.log(userScore, compScore);
  winnerBox.style.display = "block"; // make the box visible

  // console.log(winnerText);
  if (winner == "user") {
    userScore += 1;
    round += 1;
    winnerBox.textContent = `${winnerText}`;
    scoreBox.innerHTML = `<span class= "title">Score:</span><br><strong>You:</strong>${userScore}<br><strong>Computer:</strong>${compScore}`;
  } else if (winner == "comp") {
    compScore += 1;
    round += 1;
    winnerBox.textContent = `${winnerText}`;
    scoreBox.innerHTML = `<span class= "title">Score:</span><br><strong>You:</strong>${userScore}<br><strong>Computer:</strong>${compScore}`;
  } else if (winner == "tie") {
    winnerBox.textContent = `${winnerText}`;
    scoreBox.innerHTML = `<span class= "title">Score:</span><br><strong>You:</strong>${userScore}<br><strong>Computer:</strong>${compScore}`;
  }
  console.log(round);
  if (round == 5) {
    //selectors
    const containerMain = document.querySelector(".container-main");
    const container = document.querySelector("container");
    //remove ability to select
    btn1.removeEventListener("click", btnClick);
    btn2.removeEventListener("click", btnClick);
    btn3.removeEventListener("click", btnClick);
    //display winner
    winnerBox.textContent = winnerOfGame(userScore, compScore, winner);
    //add reset button
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("resetButton");
    resetBtn.textContent = "Reset";
    containerMain.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
  }
  // Re-enable the button after 500ms (adjust as needed)

  // setTimeout(() => {
  //   btn1.disabled = false;
  //   btn2.disabled = false;
  //   btn3.disabled = false;
  // }, 500);
}

function winnerOfGame(userScore, compScore, winner) {
  if (winner == "user" && userScore < compScore) {
    return `${choiceString[choice]} beats ${choiceString[computerChoice]}, you won the round! However it wasn't enough... You lost the game:(\nClick the reset button below to start a new game.`;
  } else if (winner == "user" && userScore > compScore) {
    return `${choiceString[choice]} beats ${choiceString[computerChoice]}, you won the round! Congratulations! You won the game!\nClick the reset button below to start a new game.`;
  } else if (winner == "comp" && userScore > compScore) {
    return `${choiceString[computerChoice]} beats ${choiceString[choice]}, you lost the round... However you still won the game!! Congratulations!\nClick the reset button below to start a new game.`;
  } else if (winner == "comp" && userScore < compScore) {
    return `${choiceString[computerChoice]} beats ${choiceString[choice]}, you lost the round and also lost the game :( better luck next time!\nClick the reset button below to start a new game.`;
  }
}
function resetGame(e) {
  const winnerBox = document.querySelector(".winnerBox");
  const scoreBox = document.querySelector(".scoreBox");
  userScore = 0;
  compScore = 0;
  round = 0;
  winner = "";
  winnerText = "";

  winnerBox.style.display = "none"; // make the box visible

  winnerBox.textContent = "";
  scoreBox.innerHTML =
    '<span class="title">Score:</span><br /><strong>You:</strong><br /><strong>Computer:</strong>';
  //remove reset button
  const parentElement = e.target.parentNode;
  parentElement.removeChild(e.target);
  //add selection ability again
  btn1.addEventListener("click", btnClick);
  btn2.addEventListener("click", btnClick);
  btn3.addEventListener("click", btnClick);
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (4 - 1) + 1); //random integer between 1 (inclusive) and 3
  return computerChoice;
}

function getWinner(choice, computerChoice) {
  let selectionOutputString = `Your selection is: ${choiceString[choice]}\n and the Computers selection is: ${choiceString[computerChoice]}\n`;
  let computerWinnerString = `${choiceString[computerChoice]} beats ${choiceString[choice]}, you lost the round :(`;
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
      winner = "user";
      break;
    case choice === 2 && computerChoice === 3:
      winnerText = selectionOutputString + computerWinnerString;
      winner = "comp";
      break;
    case choice === 3 && computerChoice === 1:
      winnerText = selectionOutputString + computerWinnerString;
      winner = "comp";
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
