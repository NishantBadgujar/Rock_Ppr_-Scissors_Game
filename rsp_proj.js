let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return option[randInd];
};

const drawGame = () => {
  console.log("Game was draw...!");
  message.innerText = "Game was draw...! Play again";
  message.style.backgroundColor = "rgb(193, 0, 219)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreP.innerText = userScore;
    message.innerText = `You are win...! Your ${userChoice} beats to ${compChoice}`;
    message.style.backgroundColor = "rgb(5, 179, 247)";
  } else {
    compScore++;
    compScoreP.innerText = compScore;
    message.innerText = `You Lose...! ${compChoice} beats to your ${userChoice}`;
    message.style.backgroundColor = "rgb(239, 7, 143)";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Comp have remaining only paper scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
