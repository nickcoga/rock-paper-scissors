function computerPlay() {
  // will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

  var res = 0;

  res = getRandomInt(1, 4);
  if (res === 1) return "rock";
  else if (res === 2) return "paper";
  else {
    console.log("saio scissors");
    return "scissors";
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(computerPlay());
