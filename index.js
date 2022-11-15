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
/*  RANDOM NUMBER GENRATOR  */
/**************************************/

const randInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

const noPositionPlayed = function (positionPlayed) {
  // No position are played
  let randomNumber = randInt(0, 8);
  console.log(`FIRST : ${randomNumber}`);
  while (
    randomNumber === positionPlayed &&
    alreadyPlayedPositions[randomNumber] === 1
  )
    randomNumber = randInt(0, 8);
  console.log(`SECOND : ${randomNumber}`);
  switch (randomNumber) {
    case 0:
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 1:
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[1] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 2:
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 3:
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[3] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 4:
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 5:
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[5] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 6:
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 7:
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[7] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
    case 8:
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
      break;
  }
};
/**************************************/
/*  SINGLE PLAYER COMPUTER  */
/**************************************/

const computerPlays = function (positionPlayed) {
  console.log('ENTERD THE FUNCTION');
  // box 1
  if (positionPlayed === 0) {
    console.log(0);
    if (
      alreadyPlayedPositions[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 3
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 2
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 7
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 4
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 9
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 5
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 2
  else if (positionPlayed === 1) {
    console.log(1);
    if (
      alreadyPlayedPositions[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 1
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 3
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 8
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 5
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 3
  else if (positionPlayed === 2) {
    console.log(2);
    if (
      alreadyPlayedPositions[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 3
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 2
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 7
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 4
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 9
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 5
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 4
  else if (positionPlayed === 3) {
    console.log(3);
    if (
      alreadyPlayedPositions[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 1
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 7
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 6
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 5
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 5
  else if (positionPlayed === 4) {
    console.log(4);
    if (
      alreadyPlayedPositions[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 2
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 2
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[2] &&
      divBoard2.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 2
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 4
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 6
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[6] &&
      divBoard2.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 2
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 8
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[8] &&
      divBoard2.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 2
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 6
  else if (positionPlayed === 5) {
    console.log(5);
    if (
      alreadyPlayedPositions[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 3
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 4
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 5
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 9
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 7
  else if (positionPlayed === 6) {
    console.log(6);
    if (
      alreadyPlayedPositions[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 1
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 3
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 4
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 5
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 8
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 9
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 8
  else if (positionPlayed === 7) {
    console.log(7);
    if (
      alreadyPlayedPositions[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 2
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 5
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 7
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 9
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }

  // box 9
  else if (positionPlayed === 8) {
    console.log(8);
    if (
      alreadyPlayedPositions[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 1
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 3
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 5
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 6
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 7
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      alreadyPlayedPositions[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 8
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      noPositionPlayed(positionPlayed);
    }
  }
};

const playMP = function () {
  allBox.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!alreadyPlayedPositions[index] && !isGameOver) {
        box.style.color = '#fff';
        box.textContent = activePlayer === 0 ? 'x' : 'o';
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        alreadyPlayedPositions[index] = 1;
        gamePlayedFor += 1;
        gameOver();
      }
    });
  });
};

const playSP = function () {
  allBox.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!alreadyPlayedPositions[index] && !isGameOver) {
        box.style.color = '#fff';
        box.textContent = activePlayer === 0 ? 'x' : 'o';
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        alreadyPlayedPositions[index] = 1;
        gamePlayedFor += 1;
        gameOver();
        computerPlays(index);
      }
    });
  });
};

/**************************************/
/*  MULTI PLAYER MODE  */
/**************************************/

mpButton.addEventListener('click', function () {
  contentVisible();
  console.log();
  playMP();
});

/**************************************/
/*  SINGLE PLAYER MODE  */
/**************************************/

spButton.addEventListener('click', function () {
  contentVisible();
  playSP();
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
