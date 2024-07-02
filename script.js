"use strict";
const player1 = document.querySelector(".player0");
const player2 = document.querySelector(".player1");
const score1 = document.querySelector(".score-0");
const score2 = document.querySelector(".score-1");
const currentScore1 = document.querySelector(".current-score-player0");
const currentScore2 = document.querySelector(".current-score-player1");
const diceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold-score");
const newBtn = document.querySelector(".new-game");
const diceImg = document.querySelector(".dice");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
const switchActivePlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(
    `.current-score-player${activePlayer}`
  ).textContent = 0;
  currentScore = 0;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};

diceBtn.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.current-score-player${activePlayer}`).textContent =
      currentScore;
  } else {
    switchActivePlayer();
  }
});
holdBtn.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.querySelector(`.score-${activePlayer}`).textContent =
    scores[activePlayer];

    if (scores[activePlayer] >= 10) {
        document.querySelector(`.player${activePlayer}`).classList.add('winner');
        document.querySelector('.winmsg').classList.remove('hidden');
        diceImg.classList.add('hidden');
        document.querySelector('.winmsg').textContent=`🎉Player ${activePlayer+1} is winner `;

        diceBtn.classList.add('hidden');
        holdBtn.classList.add('hidden');
  } else {
    switchActivePlayer();
  }
});
newBtn.addEventListener('click', function () {
    score1.textContent = 0;
    score2.textContent = 0;
    scores = [0, 0];
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    diceBtn.classList.remove('hidden');
    holdBtn.classList.remove('hidden');
    diceImg.classList.add('hidden');
    document.querySelector(`.player1`).classList.remove("winner");
    document.querySelector(`.player0`).classList.remove("winner");
    document.querySelector(`.player1`).classList.remove("player-active");
    document.querySelector(`.player0`).classList.add("player-active");
     document.querySelector(".winmsg").classList.add("hidden");
    
})
