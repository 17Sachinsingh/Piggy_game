"use strict";
const player1 = document.querySelector(".player0");
const player2 = document.querySelector(".player1");
const score1 = document.querySelector(".score-0");
const score2 = document.querySelector(".score-2");
const currentScore1 = document.querySelector(".current-score-player0");
const currentScore2 = document.querySelector(".current-score-player1");
currentScore1.value = 0;
currentScore2.value = 0;
const diceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold-score");
const newBtn = document.querySelector(".new-game");
const diceImg = document.querySelector(".dice");
let currentScore = 0;
let activePlayer = 0;

diceBtn.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.current-score-player${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(
      `.current-score-player${activePlayer}`
    ).textContent = 0;
      currentScore = 0;
      player1.classList.toggle('player-active');
      player2.classList.toggle('player-active');
  }
});
