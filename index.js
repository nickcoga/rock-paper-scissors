function computerPlay() {
  // will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

  var res = 0;

  res = getRandomInt(1, 4);
  if (res === 1) return "rock";
  else if (res === 2) return "paper";
  else {
    //console.log("salio scissors");
    return "scissors";
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  // METODO 1  Y LARGO USANDO LOOPS PARA REALIZAR LAS CONDICIONALES: EN TOTAL SERIAN COMO 9 CONDICONALES
  //   if (playerSelection === "rock") {
  //     if (computerSelection === "paper") {
  //       return "You Lose " + computerSelection + " beats " + playerSelection;
  //     } else if (computerSelection === "scissors")
  //       return "You Win " + playerSelection + " beats " + computerSelection;
  //     else return "Tie";
  //   } else if (playerSelection === "scissors") {
  //     if (computerSelection === "paper") {
  //       return "You Lose " + computerSelection + " beats " + playerSelection;
  //     } else if (computerSelection === "scissors")
  //       return "You Win " + playerSelection + " beats " + computerSelection;
  //     else return "Tie";
  //   }

  // METODO 2 Y CORTO USANDO OBJETOS PARA REALIZAR LAS CONDICIONALES EN TOTAL SERIAN 3
  var game = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) return "Tie";
  else if (game[playerSelection] === computerSelection)
    // return "You Win " + playerSelection + " beats " + computerSelection;
    return `You Win: ${playerSelection} beats ${computerSelection}`;
  else if (game[computerSelection] === playerSelection)
    // return "You Lose " + computerSelection + " beats " + playerSelection;
    return `You lose: ${computerSelection} beats ${playerSelection}`;
  else return `no entendi la entrada : ${playerSelection}`;
}

const playerSelection = window.prompt().toLowerCase(); // ingresa tu eleccion con promt y convierte todos los ingresos en miniscula
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
