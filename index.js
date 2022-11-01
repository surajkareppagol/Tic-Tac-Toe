'use strict';

/**************************************/
/*  DOM ELEMENTS  */
/**************************************/

const navBox = document.querySelector('.nav-options');
const headText = document.querySelector('.primary-heading');
const backOption = document.querySelector('.back-option');
const resetOption = document.querySelector('.reset-option');
const optionBox = document.querySelector('.game-mode-box');
const spButton = document.querySelector('.sp-button');
const mpButton = document.querySelector('.mp-button');
const board = document.querySelector('.game-board');
const allBox = document.querySelectorAll('.board');
const divBoard1 = document.querySelector('.board-1');
const divBoard2 = document.querySelector('.board-2');
const divBoard3 = document.querySelector('.board-3');
const divBoard4 = document.querySelector('.board-4');
const divBoard5 = document.querySelector('.board-5');
const divBoard6 = document.querySelector('.board-6');
const divBoard7 = document.querySelector('.board-7');
const divBoard8 = document.querySelector('.board-8');
const divBoard9 = document.querySelector('.board-9');
const player1 = document.querySelector('.player-score-1');
const player2 = document.querySelector('.player-score-2');
const note = document.querySelector('.note');

/**************************************/
/*  VARIABLES  */
/**************************************/

let alreadyPlayedPositions = Array.from({ length: 9 }, () => 0);
let playerOneScore = 0,
  playerTwoScore = 0,
  gamePlayedFor = 0,
  activePlayer = 0;
let winColor = '#a9e34b',
  boardColor = '#fff';
let isGameOver = false;

/**************************************/
/* FUNCTIONS */
/**************************************/

const initiate = function () {
  alreadyPlayedPositions = Array.from({ length: 9 }, () => 0);
  activePlayer = 0;
  gamePlayedFor = 0;
  isGameOver = false;
  setTimeout(function () {
    allBox.forEach((box, index) => {
      box.style.color = '#000';
      box.textContent = index + 1;
    });
    player1.textContent = playerOneScore;
    player2.textContent = playerTwoScore;
  }, 500);
};

const contentVisible = function () {
  board.classList.toggle('display-hide');
  backOption.classList.toggle('display-hide');
  resetOption.classList.toggle('display-hide');
  optionBox.classList.toggle('display-hide');
  note.classList.toggle('display-hide');
  headText.classList.toggle('display-hide');
};

const setGameOver = function () {
  isGameOver = true;
  activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
};

/**************************************/
/* CHECK WIN CONDITION */
/**************************************/

const gameOver = function () {
  if (
    divBoard1.textContent === divBoard2.textContent &&
    divBoard1.textContent === divBoard3.textContent
  ) {
    divBoard1.style.color = winColor;
    divBoard2.style.color = winColor;
    divBoard3.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard4.textContent === divBoard5.textContent &&
    divBoard4.textContent === divBoard6.textContent
  ) {
    divBoard4.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard6.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard7.textContent === divBoard8.textContent &&
    divBoard7.textContent === divBoard9.textContent
  ) {
    divBoard7.style.color = winColor;
    divBoard8.style.color = winColor;
    divBoard9.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard1.textContent === divBoard4.textContent &&
    divBoard1.textContent === divBoard7.textContent
  ) {
    divBoard1.style.color = winColor;
    divBoard4.style.color = winColor;
    divBoard7.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard2.textContent === divBoard5.textContent &&
    divBoard2.textContent === divBoard8.textContent
  ) {
    divBoard2.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard8.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard3.textContent === divBoard6.textContent &&
    divBoard3.textContent === divBoard9.textContent
  ) {
    divBoard3.style.color = winColor;
    divBoard6.style.color = winColor;
    divBoard9.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard1.textContent === divBoard5.textContent &&
    divBoard1.textContent === divBoard9.textContent
  ) {
    divBoard1.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard9.style.color = winColor;
    setGameOver();
    initiate();
  } else if (
    divBoard3.textContent === divBoard5.textContent &&
    divBoard3.textContent === divBoard7.textContent
  ) {
    divBoard3.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard7.style.color = winColor;
    setGameOver();
    initiate();
  } else if (gamePlayedFor === 9) {
    initiate();
  }
};

/**************************************/
/*  MULTI PLAYER MODE  */
/**************************************/

mpButton.addEventListener('click', function () {
  contentVisible();
  allBox.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!alreadyPlayedPositions[index] && !isGameOver) {
        box.style.color = '#fff';
        box.textContent = activePlayer === 0 ? 'x' : 'o';
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        alreadyPlayedPositions[index] = 1;
        console.log(alreadyPlayedPositions);
        gamePlayedFor += 1;
        gameOver();
      }
    });
  });
});

/**************************************/
/*  BACK - NAV  */
/**************************************/

backOption.addEventListener('click', function () {
  contentVisible();
  playerOneScore = 0;
  playerTwoScore = 0;
  initiate();
});

/**************************************/
/*  RESET - NAV */
/**************************************/

resetOption.addEventListener('click', function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  initiate();
});
