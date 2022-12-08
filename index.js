/*
 *  Created by Shadoww
 *  Github : https://github.com/dev-shadoww
 */

'use strict';

const headText = document.querySelector('.nav__heading');
const backOption = document.querySelector('.nav__back');
const resetOption = document.querySelector('.nav__reset');
const optionBox = document.querySelector('.mode');
const singlePlayerButton = document.querySelector('.mode__single-player');
const multiPlayerButton = document.querySelector('.mode__multi-player');

/********************************************************************************/
// Selecting the boards
const board = document.querySelector('.board');
const boards = document.querySelectorAll('.board__board');
const board1 = document.querySelector('.board__board--1');
const board2 = document.querySelector('.board__board--2');
const board3 = document.querySelector('.board__board--3');
const board4 = document.querySelector('.board__board--4');
const board5 = document.querySelector('.board__board--5');
const board6 = document.querySelector('.board__board--6');
const board7 = document.querySelector('.board__board--7');
const board8 = document.querySelector('.board__board--8');
const board9 = document.querySelector('.board__board--9');

const player1 = document.querySelector('.score__score--1');
const player2 = document.querySelector('.score__score--2');

let playedBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerOneScore = 0;
let playerTwoScore = 0;
let gamePlayedFor = 0;
let activePlayer = 0;
let winColor = '#a9e34b';
let boardColor = '#fff';
let isGameOver = false;
let gameMode = false;

/********************************************************************************/
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
    boards.forEach((box, index) => {
      box.style.color = '#000';
      box.textContent = index + 1;
    });
    player1.textContent = playerOneScore;
    player2.textContent = playerTwoScore;
  }, 400);
};

const showContent = function () {
  board.classList.toggle('u-display-hide');
  backOption.classList.toggle('u-display-hide');
  resetOption.classList.toggle('u-display-hide');
  optionBox.classList.toggle('u-display-hide');
  headText.classList.toggle('u-display-hide');
};

/********************************************************************************/
// Code related to game mechanics.

// Check if game is over or not.
const gameOver = function () {
  if (
    board1.textContent === board2.textContent &&
    board1.textContent === board3.textContent &&
    !isGameOver
  ) {
    board1.style.color = board2.style.color = board3.style.color = winColor;
    resetGame(1);
  } else if (
    board4.textContent === board5.textContent &&
    board4.textContent === board6.textContent &&
    !isGameOver
  ) {
    board4.style.color = board5.style.color = board6.style.color = winColor;
    resetGame(1);
  } else if (
    board7.textContent === board8.textContent &&
    board7.textContent === board9.textContent &&
    !isGameOver
  ) {
    board7.style.color = board8.style.color = board9.style.color = winColor;
    resetGame(1);
  } else if (
    board1.textContent === board4.textContent &&
    board1.textContent === board7.textContent &&
    !isGameOver
  ) {
    board1.style.color = board4.style.color = board7.style.color = winColor;
    resetGame(1);
  } else if (
    board2.textContent === board5.textContent &&
    board2.textContent === board8.textContent &&
    !isGameOver
  ) {
    board2.style.color = board5.style.color = board8.style.color = winColor;
    resetGame(1);
  } else if (
    board3.textContent === board6.textContent &&
    board3.textContent === board9.textContent &&
    !isGameOver
  ) {
    board3.style.color = board6.style.color = board9.style.color = winColor;
    resetGame(1);
  } else if (
    board1.textContent === board5.textContent &&
    board1.textContent === board9.textContent &&
    !isGameOver
  ) {
    board1.style.color = board5.style.color = board9.style.color = winColor;
    resetGame(1);
  } else if (
    board3.textContent === board5.textContent &&
    board3.textContent === board7.textContent &&
    !isGameOver
  ) {
    board3.style.color = board5.style.color = board7.style.color = winColor;
    resetGame(1);
  } else if (gamePlayedFor === 9) {
    resetGame(0);
  }
};

// Check if random number is valid.
const checkRandomNumber = function (randomNumber) {
  boards.forEach((box, index) => {
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
  boards.forEach((box, index) => {
    if (randomNumber === index) {
      playGame(box, index);
    }
  });
};

// Function to operate gameplay of computer.
const playComp = function (positionPlayed) {
  if (positionPlayed === 0) {
    console.log('-------------ENTERING---------------');
    console.log(0);
    console.log(playedBoxes);
    if (
      playedBoxes[1] &&
      board2.textContent !== 'o' &&
      board3.textContent !== 'o' &&
      board3.textContent !== 'x'
    ) {
      // 2
      board3.style.color = '#fff';
      board3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      board3.textContent !== 'o' &&
      board2.textContent !== 'o' &&
      board2.textContent !== 'x'
    ) {
      // 3
      board2.style.color = '#fff';
      board2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      board4.textContent !== 'o' &&
      board7.textContent !== 'o' &&
      board7.textContent !== 'x'
    ) {
      // 4
      board7.style.color = '#fff';
      board7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board9.textContent !== 'o' &&
      board9.textContent !== 'x'
    ) {
      // 5
      board9.style.color = '#fff';
      board9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      board7.textContent !== 'o' &&
      board4.textContent !== 'o' &&
      board4.textContent !== 'x'
    ) {
      // 7
      board4.style.color = '#fff';
      board4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      board9.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 9
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 1) {
    console.log('-------------ENTERING---------------');
    console.log(1);
    console.log(playedBoxes);
    if (
      playedBoxes[0] &&
      board1.textContent !== 'o' &&
      board3.textContent !== 'o' &&
      board3.textContent !== 'x'
    ) {
      // 1
      board3.style.color = '#fff';
      board3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      board3.textContent !== 'o' &&
      board1.textContent !== 'o' &&
      board1.textContent !== 'x'
    ) {
      // 3
      board1.style.color = '#fff';
      board1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board8.textContent !== 'o' &&
      board8.textContent !== 'x'
    ) {
      // 5
      board8.style.color = '#fff';
      board8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      board8.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 8
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 2) {
    console.log('-------------ENTERING---------------');
    console.log(2);
    console.log(playedBoxes);
    if (
      playedBoxes[0] &&
      board1.textContent !== 'o' &&
      board2.textContent !== 'o' &&
      board2.textContent !== 'x'
    ) {
      // 3
      board2.style.color = '#fff';
      board2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[1] &&
      board2.textContent !== 'o' &&
      board1.textContent !== 'o' &&
      board1.textContent !== 'x'
    ) {
      // 2
      board1.style.color = '#fff';
      board1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board7.textContent !== 'o' &&
      board7.textContent !== 'x'
    ) {
      // 5
      board7.style.color = '#fff';
      board7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      board6.textContent !== 'o' &&
      board9.textContent !== 'o' &&
      board9.textContent !== 'x'
    ) {
      // 4
      board9.style.color = '#fff';
      board9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      board7.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 9
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      board9.textContent !== 'o' &&
      board6.textContent !== 'o' &&
      board6.textContent !== 'x'
    ) {
      // 7
      board6.style.color = '#fff';
      board6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 3) {
    console.log('-------------ENTERING---------------');
    console.log(3);
    console.log(playedBoxes);
    if (
      playedBoxes[0] &&
      board1.textContent !== 'o' &&
      board7.textContent !== 'o' &&
      board7.textContent !== 'x'
    ) {
      // 1
      board7.style.color = '#fff';
      board7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board6.textContent !== 'o' &&
      board6.textContent !== 'x'
    ) {
      // 5
      board6.style.color = '#fff';
      board6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      board6.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 6
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      board7.textContent !== 'o' &&
      board1.textContent !== 'o' &&
      board1.textContent !== 'x'
    ) {
      // 7
      board1.style.color = '#fff';
      board1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 4) {
    console.log('-------------ENTERING---------------');
    console.log(4);
    console.log(playedBoxes);
    if (
      playedBoxes[0] &&
      board1.textContent !== 'o' &&
      board9.textContent !== 'o' &&
      board9.textContent !== 'x'
    ) {
      // 1
      board9.style.color = '#fff';
      board9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[1] &&
      board2.textContent !== 'o' &&
      board8.textContent !== 'o' &&
      board8.textContent !== 'x'
    ) {
      // 2
      board8.style.color = '#fff';
      board8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      board2.textContent !== 'o' &&
      board7.textContent !== 'o' &&
      board7.textContent !== 'x'
    ) {
      // 3
      board7.style.color = '#fff';
      board7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      board4.textContent !== 'o' &&
      board6.textContent !== 'o' &&
      board6.textContent !== 'x'
    ) {
      // 4
      board6.style.color = '#fff';
      board6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      board6.textContent !== 'o' &&
      board4.textContent !== 'o' &&
      board4.textContent !== 'x'
    ) {
      // 6
      board4.style.color = '#fff';
      board4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      board2.textContent !== 'o' &&
      board3.textContent !== 'o' &&
      board3.textContent !== 'x'
    ) {
      // 7
      board3.style.color = '#fff';
      board3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      board8.textContent !== 'o' &&
      board2.textContent !== 'o' &&
      board2.textContent !== 'x'
    ) {
      // 8
      board2.style.color = '#fff';
      board2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      board9.textContent !== 'o' &&
      board1.textContent !== 'o' &&
      board1.textContent !== 'x'
    ) {
      // 2
      board1.style.color = '#fff';
      board1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 5) {
    console.log('-------------ENTERING---------------');
    console.log(5);
    console.log(playedBoxes);
    if (
      playedBoxes[2] &&
      board3.textContent !== 'o' &&
      board9.textContent !== 'o' &&
      board9.textContent !== 'x'
    ) {
      // 3
      board9.style.color = '#fff';
      board9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      board4.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 4
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board4.textContent !== 'o' &&
      board4.textContent !== 'x'
    ) {
      // 5
      board4.style.color = '#fff';
      board4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      board9.textContent !== 'o' &&
      board3.textContent !== 'o' &&
      board3.textContent !== 'x'
    ) {
      // 9
      board3.style.color = '#fff';
      board3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 6) {
    console.log('-------------ENTERING---------------');
    console.log(6);
    console.log(playedBoxes);
    if (
      playedBoxes[0] &&
      board1.textContent !== 'o' &&
      board4.textContent !== 'o' &&
      board4.textContent !== 'x'
    ) {
      // 1
      board4.style.color = '#fff';
      board4.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[3] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      board3.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 3
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[3] &&
      board4.textContent !== 'o' &&
      board1.textContent !== 'o' &&
      board1.textContent !== 'x'
    ) {
      // 4
      board1.style.color = '#fff';
      board1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board3.textContent !== 'o' &&
      board3.textContent !== 'x'
    ) {
      // 5
      board3.style.color = '#fff';
      board3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      board8.textContent !== 'o' &&
      board9.textContent !== 'o' &&
      board9.textContent !== 'x'
    ) {
      // 8
      board9.style.color = '#fff';
      board9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      board9.textContent !== 'o' &&
      board8.textContent !== 'o' &&
      board8.textContent !== 'x'
    ) {
      // 9
      board8.style.color = '#fff';
      board8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 7) {
    console.log('-------------ENTERING---------------');
    console.log(7);
    console.log(playedBoxes);
    if (
      playedBoxes[1] &&
      board2.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 2
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board2.textContent !== 'o' &&
      board2.textContent !== 'x'
    ) {
      // 5
      board2.style.color = '#fff';
      board2.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[1] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      board7.textContent !== 'o' &&
      board9.textContent !== 'o' &&
      board9.textContent !== 'x'
    ) {
      // 7
      board9.style.color = '#fff';
      board9.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[8] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[8] &&
      board9.textContent !== 'o' &&
      board7.textContent !== 'o' &&
      board7.textContent !== 'x'
    ) {
      // 9
      board7.style.color = '#fff';
      board7.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[6] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else {
      playRandom(positionPlayed);
    }
  } else if (positionPlayed === 8) {
    console.log('-------------ENTERING---------------');
    console.log(8);
    console.log(playedBoxes);
    if (
      playedBoxes[0] &&
      board1.textContent !== 'o' &&
      board5.textContent !== 'o' &&
      board5.textContent !== 'x'
    ) {
      // 1
      board5.style.color = '#fff';
      board5.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[4] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[2] &&
      board3.textContent !== 'o' &&
      board6.textContent !== 'o' &&
      board6.textContent !== 'x'
    ) {
      // 3
      board6.style.color = '#fff';
      board6.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[5] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[4] &&
      board5.textContent !== 'o' &&
      board1.textContent !== 'o' &&
      board1.textContent !== 'x'
    ) {
      // 5
      board1.style.color = '#fff';
      board1.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[5] &&
      board6.textContent !== 'o' &&
      board3.textContent !== 'o' &&
      board3.textContent !== 'x'
    ) {
      // 6
      board3.style.color = '#fff';
      board3.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[2] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[6] &&
      board7.textContent !== 'o' &&
      board8.textContent !== 'o' &&
      board8.textContent !== 'x'
    ) {
      // 7
      board8.style.color = '#fff';
      board8.textContent = activePlayer === 0 ? 'x' : 'o';
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      playedBoxes[7] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (
      playedBoxes[7] &&
      board8.textContent !== 'o' &&
      board7.textContent !== 'o' &&
      board7.textContent !== 'x'
    ) {
      // 8
      board7.style.color = '#fff';
      board7.textContent = activePlayer === 0 ? 'x' : 'o';
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
  boards.forEach((box, index) => {
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
  boards.forEach((box, index) => {
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
backOption.addEventListener('click', function (e) {
  e.preventDefault();
  showContent();
  playerOneScore = 0;
  playerTwoScore = 0;
  resetGame(0);
});

// Reset - option.
resetOption.addEventListener('click', function (e) {
  e.preventDefault();
  playerOneScore = 0;
  playerTwoScore = 0;
  resetGame(0);
});
