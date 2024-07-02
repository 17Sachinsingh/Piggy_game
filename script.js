'use strict'
const score1 = document.querySelector(".score-0");
const score2 = document.querySelector(".score-2");
const currentScore1 = document.querySelector(".current-score-player0");
const currentScore2 = document.querySelector(".current-score-player1");
const diceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold-score");
const newBtn = document.querySelector(".new-game");
const diceImg = document.querySelector('.dice');

diceBtn.addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;
})
