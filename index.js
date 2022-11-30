/*
 *  Created by : Shadoww
 *  Github : https://github.com/dev-shadoww
 *
 *  Tic tac toe game created as a side project, built with html, css and javascript and
 *  includes both single player and multi player modes.
 *
 *  Warning : playComp() function it contains a bug that is the value automatically changes.
 */

'use strict';

const headText = document.querySelector('.primary-heading');
const backOption = document.querySelector('.back-option');
const resetOption = document.querySelector('.reset-option');
const optionBox = document.querySelector('.game-mode-box');
const singlePlayerButton = document.querySelector('.sp-button');
const multiPlayerButton = document.querySelector('.mp-button');

// Selecting the boards
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

let playedBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerOneScore = 0;
let playerTwoScore = 0;
let gamePlayedFor = 0;
let activePlayer = 0;
let winColor = '#a9e34b';
let boardColor = '#fff';
let isGameOver = false;
let gameMode = false;

// Reset game conditions.
const resetGame = function (allConditions) {
  if (allConditions) {
    isGameOver = true;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
  }

  playedBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
  }, 400);
};

const showContent = function () {
  board.classList.toggle('display-hide');
  backOption.classList.toggle('display-hide');
  resetOption.classList.toggle('display-hide');
  optionBox.classList.toggle('display-hide');
  note.classList.toggle('display-hide');
  headText.classList.toggle('display-hide');
};

/********************************************************************************/
// Code related to game mechanics.

// Check if game is over or not.
const gameOver = function () {
  if (
    divBoard1.textContent === divBoard2.textContent &&
    divBoard1.textContent === divBoard3.textContent
  ) {
    divBoard1.style.color =
      divBoard2.style.color =
      divBoard3.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard4.textContent === divBoard5.textContent &&
    divBoard4.textContent === divBoard6.textContent
  ) {
    divBoard4.style.color =
      divBoard5.style.color =
      divBoard6.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard7.textContent === divBoard8.textContent &&
    divBoard7.textContent === divBoard9.textContent
  ) {
    divBoard7.style.color =
      divBoard8.style.color =
      divBoard9.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard1.textContent === divBoard4.textContent &&
    divBoard1.textContent === divBoard7.textContent
  ) {
    divBoard1.style.color =
      divBoard4.style.color =
      divBoard7.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard2.textContent === divBoard5.textContent &&
    divBoard2.textContent === divBoard8.textContent
  ) {
    divBoard2.style.color =
      divBoard5.style.color =
      divBoard8.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard3.textContent === divBoard6.textContent &&
    divBoard3.textContent === divBoard9.textContent
  ) {
    divBoard3.style.color =
      divBoard6.style.color =
      divBoard9.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard1.textContent === divBoard5.textContent &&
    divBoard1.textContent === divBoard9.textContent
  ) {
    divBoard1.style.color =
      divBoard5.style.color =
      divBoard9.style.color =
        winColor;
    resetGame(1);
  } else if (
    divBoard3.textContent === divBoard5.textContent &&
    divBoard3.textContent === divBoard7.textContent
  ) {
    divBoard3.style.color =
      divBoard5.style.color =
      divBoard7.style.color =
        winColor;
    resetGame(1);
  } else if (gamePlayedFor === 9) {
    resetGame(0);
  }
};

// Check if random number is valid.
const checkRandomNumber = function (randomNumber) {
  allBox.forEach((box, index) => {
    if (box.textContent == 'o' && index === randomNumber) return 0;
    else return 1;
  });
};

// Generate random number between 0 to 8.
const randInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// If no position is possible for computer.
const playRandom = function (positionPlayed) {
  let randomNumber = randInt(0, 8);
  while (
    randomNumber === positionPlayed &&
    playedBoxes[randomNumber] === 1 &&
    checkRandomNumber()
  )
    randomNumber = randInt(0, 8);
  allBox.forEach((box, index) => {
    if (randomNumber === index) {
      playGame(box, index);
    }
  });
};

// Function to operate gameplay of computer.
const playComp = function (positionPlayed) {
  if (positionPlayed === 0) {
    console.log(0);
    if (
      playedBoxes[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 3
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 2
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 7
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 4
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 9
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 5
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 1) {
    console.log(1);
    if (
      playedBoxes[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 1
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 3
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 8
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 5
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 2) {
    console.log(2);
    if (
      playedBoxes[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 3
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 2
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 7
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 4
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 9
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 5
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 3) {
    console.log(3);
    if (
      playedBoxes[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 1
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 7
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 6
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 5
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 4) {
    console.log(4);
    if (
      playedBoxes[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 1
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 2
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      divBoard2.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 3
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 4
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 6
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      divBoard2.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 7
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 8
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 2
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 5) {
    console.log(5);
    if (
      playedBoxes[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 3
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 4
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 5
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 9
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 6) {
    console.log(6);
    if (
      playedBoxes[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard4.textContent !== 'o'
    ) {
      // 1
      divBoard4.style.color = '#fff';
      divBoard4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 3
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      divBoard4.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 4
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 5
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 8
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 9
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 7) {
    console.log(7);
    if (
      playedBoxes[1] &&
      divBoard2.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 2
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard2.textContent !== 'o'
    ) {
      // 5
      divBoard2.style.color = '#fff';
      divBoard2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard9.textContent !== 'o'
    ) {
      // 7
      divBoard9.style.color = '#fff';
      divBoard9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      divBoard9.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 9
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 8) {
    console.log(8);
    if (
      playedBoxes[0] &&
      divBoard1.textContent !== 'o' &&
      divBoard5.textContent !== 'o'
    ) {
      // 1
      divBoard5.style.color = '#fff';
      divBoard5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      divBoard3.textContent !== 'o' &&
      divBoard6.textContent !== 'o'
    ) {
      // 3
      divBoard6.style.color = '#fff';
      divBoard6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      divBoard5.textContent !== 'o' &&
      divBoard1.textContent !== 'o'
    ) {
      // 5
      divBoard1.style.color = '#fff';
      divBoard1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      divBoard6.textContent !== 'o' &&
      divBoard3.textContent !== 'o'
    ) {
      // 6
      divBoard3.style.color = '#fff';
      divBoard3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      divBoard7.textContent !== 'o' &&
      divBoard8.textContent !== 'o'
    ) {
      // 7
      divBoard8.style.color = '#fff';
      divBoard8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      divBoard8.textContent !== 'o' &&
      divBoard7.textContent !== 'o'
    ) {
      // 8
      divBoard7.style.color = '#fff';
      divBoard7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  }
};

const playGame = function (box, index) {
  box.style.color = '#fff';
  box.textContent = activePlayer === 0 ? 'x' : 'o';
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  playedBoxes[index] = 1;
  gamePlayedFor += 1;
  gameOver();
};

// Function to operate single-player mode.
const singlePlayerMode = function () {
  showContent();
  gameMode = false;
  allBox.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!playedBoxes[index] && !isGameOver && !gameMode) {
        playGame(box, index);
        if (!isGameOver)
          setTimeout(function () {
            playComp(index);
          }, 200);
      }
    });
  });
};

// Function to operate multi-player mode.
const multiPlayerMode = function () {
  showContent();
  gameMode = true;
  allBox.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!playedBoxes[index] && !isGameOver && gameMode) playGame(box, index);
    });
  });
};

// Single player button - listen to event.
singlePlayerButton.addEventListener('click', singlePlayerMode);

// Multi player button - listen to event.
multiPlayerButton.addEventListener('click', multiPlayerMode);

/********************************************************************************/

// Go Back - option.
backOption.addEventListener('click', function () {
  showContent();
  playerOneScore = 0;
  playerTwoScore = 0;
  resetGame(0);
});

// Reset - option.
resetOption.addEventListener('click', function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  resetGame(0);
});
