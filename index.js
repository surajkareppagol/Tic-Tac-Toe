'use strict';

const headText = document.querySelector('.nav__heading');
const backOption = document.querySelector('.nav__back');
const resetOption = document.querySelector('.nav__reset');
const symbolsNav = document.querySelector('.nav__symbol-btn');
const symbols = document.querySelector('.symbol');
const allSymbol = document.querySelectorAll('.symbol__box');
const symbolOnes = document.querySelectorAll('.symbol__text--1');
const symbolTwos = document.querySelectorAll('.symbol__text--2');

const optionBox = document.querySelector('.mode');
const singlePlayerButton = document.querySelector('.mode__single-player');
const multiPlayerButton = document.querySelector('.mode__multi-player');

const board = document.querySelector('.board');
const boards = document.querySelectorAll('.board__board');
const board0 = document.querySelector('.board__text--1');
const board1 = document.querySelector('.board__text--2');
const board2 = document.querySelector('.board__text--3');
const board3 = document.querySelector('.board__text--4');
const board4 = document.querySelector('.board__text--5');
const board5 = document.querySelector('.board__text--6');
const board6 = document.querySelector('.board__text--7');
const board7 = document.querySelector('.board__text--8');
const board8 = document.querySelector('.board__text--9');

const boardText = document.querySelectorAll('.board__text');
const player1 = document.querySelector('.score__score--1');
const player2 = document.querySelector('.score__score--2');

let playedBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let gamePlayedFor = 0;
let activePlayer = 0;
let isGameOver = false;
let singlePlayerOver = true;
let gameMode = false;
let computerWinNotPossible = 1;

let playerOneCharacter = 'x';
let playerTwoCharacter = 'o';

const winYellow = '#a9e34b';
const playWhite = '#fff';
const playBlack = '#000';
const showComponents = [
  board,
  backOption,
  resetOption,
  optionBox,
  headText,
  symbolsNav,
];

/************************************************/
/* Utility Functions */
/************************************************/

// Display contents.
const showContent = function (components) {
  components.forEach(comp => comp.classList.toggle('u-display-hide'));
};

// Reset game conditions.
const resetGameConditions = function (fullReset) {
  if (fullReset) {
    isGameOver = true;
    activePlayer === 0 ? (scorePlayerTwo += 1) : (scorePlayerOne += 1);
  }

  playedBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  activePlayer = 0;
  gamePlayedFor = 0;
  singlePlayerOver = true;
  setTimeout(function () {
    boardText.forEach((textElement, index) => {
      textElement.style.color = playBlack;
      textElement.textContent = index + 1;
    });
    player1.textContent = scorePlayerOne;
    player2.textContent = scorePlayerTwo;
    isGameOver = false;
  }, 400);
};

// Set winning color.
const setWinColor = function (board) {
  board.forEach(box => (box.style.color = winYellow));
};

// Generate random number between 0 to 8.
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

/************************************************/
/* Game Mechanics */
/************************************************/

// Check if there is a winning condition for computer.
const canComputerWin = function () {
  // Check horizontal
  if (
    board0.textContent === playerTwoCharacter &&
    board1.textContent === playerTwoCharacter &&
    board2.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board2, 2);
  } else if (
    board1.textContent === playerTwoCharacter &&
    board2.textContent === playerTwoCharacter &&
    board0.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board0, 0);
  } else if (
    board0.textContent === playerTwoCharacter &&
    board2.textContent === playerTwoCharacter &&
    board1.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board1, 1);
  } else if (
    board3.textContent === playerTwoCharacter &&
    board4.textContent === playerTwoCharacter &&
    board5.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board5, 5);
  } else if (
    board4.textContent === playerTwoCharacter &&
    board5.textContent === playerTwoCharacter &&
    board3.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board3, 3);
  } else if (
    board3.textContent === playerTwoCharacter &&
    board5.textContent === playerTwoCharacter &&
    board4.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board4, 4);
  } else if (
    board6.textContent === playerTwoCharacter &&
    board7.textContent === playerTwoCharacter &&
    board8.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board8, 8);
  } else if (
    board7.textContent === playerTwoCharacter &&
    board8.textContent === playerTwoCharacter &&
    board6.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board6, 6);
  } else if (
    board6.textContent === playerTwoCharacter &&
    board8.textContent === playerTwoCharacter &&
    board7.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board7, 7);
  }
  // Check vertical
  else if (
    board0.textContent === playerTwoCharacter &&
    board3.textContent === playerTwoCharacter &&
    board6.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board6, 6);
  } else if (
    board0.textContent === playerTwoCharacter &&
    board6.textContent === playerTwoCharacter &&
    board3.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board3, 3);
  } else if (
    board3.textContent === playerTwoCharacter &&
    board6.textContent === playerTwoCharacter &&
    board0.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board0, 0);
  } else if (
    board1.textContent === playerTwoCharacter &&
    board7.textContent === playerTwoCharacter &&
    board4.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board4, 4);
  } else if (
    board1.textContent === playerTwoCharacter &&
    board4.textContent === playerTwoCharacter &&
    board7.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board7, 7);
  } else if (
    board4.textContent === playerTwoCharacter &&
    board7.textContent === playerTwoCharacter &&
    board1.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board1, 1);
  } else if (
    board2.textContent === playerTwoCharacter &&
    board8.textContent === playerTwoCharacter &&
    board5.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board5, 5);
  } else if (
    board2.textContent === playerTwoCharacter &&
    board5.textContent === playerTwoCharacter &&
    board8.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board8, 8);
  } else if (
    board5.textContent === playerTwoCharacter &&
    board8.textContent === playerTwoCharacter &&
    board2.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board2, 2);
  }
  // Check diagonal
  else if (
    board0.textContent === playerTwoCharacter &&
    board8.textContent === playerTwoCharacter &&
    board4.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board4, 4);
  } else if (
    board0.textContent === playerTwoCharacter &&
    board4.textContent === playerTwoCharacter &&
    board8.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board8, 8);
  } else if (
    board4.textContent === playerTwoCharacter &&
    board8.textContent === playerTwoCharacter &&
    board0.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board0, 0);
  } else if (
    board2.textContent === playerTwoCharacter &&
    board4.textContent === playerTwoCharacter &&
    board6.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board6, 6);
  } else if (
    board2.textContent === playerTwoCharacter &&
    board6.textContent === playerTwoCharacter &&
    board4.textContent !== playerOneCharacter
  ) {
    computerWinNotPossible = 0;
    playAt(board4, 4);
  } else if (
    board4.textContent === playerTwoCharacter &&
    board6.textContent === playerTwoCharacter &&
    board2.textContent !== playerOneCharacter
  )
    playAt(board2, 2);
  else computerWinNotPossible = 1;
};

// Check if the position is valid or not.
const isPositionValid = function (boxOne, index) {
  if (!playedBoxes[index] && boxOne.textContent === playerOneCharacter)
    return 1;
  return 0;
};

// Check if game is over or not.
const isGameFinished = function () {
  if (
    board0.textContent === board1.textContent &&
    board0.textContent === board2.textContent &&
    !isGameOver
  ) {
    setWinColor([board0, board1, board2]);
    resetGameConditions(1);
  } else if (
    board3.textContent === board4.textContent &&
    board3.textContent === board5.textContent &&
    !isGameOver
  ) {
    setWinColor([board3, board4, board5]);
    resetGameConditions(1);
  } else if (
    board6.textContent === board7.textContent &&
    board6.textContent === board8.textContent &&
    !isGameOver
  ) {
    setWinColor([board6, board7, board8]);
    resetGameConditions(1);
  } else if (
    board0.textContent === board3.textContent &&
    board0.textContent === board6.textContent &&
    !isGameOver
  ) {
    setWinColor([board0, board3, board6]);
    resetGameConditions(1);
  } else if (
    board1.textContent === board4.textContent &&
    board1.textContent === board7.textContent &&
    !isGameOver
  ) {
    setWinColor([board1, board4, board7]);
    resetGameConditions(1);
  } else if (
    board2.textContent === board5.textContent &&
    board2.textContent === board8.textContent &&
    !isGameOver
  ) {
    setWinColor([board2, board5, board8]);
    resetGameConditions(1);
  } else if (
    board0.textContent === board4.textContent &&
    board0.textContent === board8.textContent &&
    !isGameOver
  ) {
    setWinColor([board0, board4, board8]);
    resetGameConditions(1);
  } else if (
    board2.textContent === board4.textContent &&
    board2.textContent === board6.textContent &&
    !isGameOver
  ) {
    setWinColor([board2, board4, board6]);
    resetGameConditions(1);
  } else if (gamePlayedFor === 9) {
    resetGameConditions(0);
  }
};

// Play game common to both modes.
const playAt = function (box, index) {
  box.style.color = playWhite;
  box.textContent =
    activePlayer === 0 ? playerOneCharacter : playerTwoCharacter;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  playedBoxes[index] = 1;
  gamePlayedFor += 1;
  isGameFinished();
};

// Played by computer.
const computerPlays = function (positionPlayed) {
  canComputerWin();

  if (computerWinNotPossible) {
    if (positionPlayed === 0 && !isGameOver) {
      if (isPositionValid(board1, 2)) {
        // The position played 0 and 1
        // The position to be played 2
        playAt(board2, 2);
      } else if (isPositionValid(board2, 1)) {
        // The position played 0 and 2
        // The position to be played 1
        playAt(board1, 1);
      } else if (isPositionValid(board3, 6)) {
        // The position played 0 and 3
        // The position to be played 6
        playAt(board6, 6);
      } else if (isPositionValid(board4, 8)) {
        // The position played 0 and 4
        // The position to be played 8
        playAt(board8, 8);
      } else if (isPositionValid(board6, 3)) {
        // The position played 0 and 6
        // The position to be played 3
        playAt(board8, 8);
      } else if (isPositionValid(board8, 4)) {
        // The position played 0 and 8
        // The position to be played 4
        playAt(board4, 4);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 1 && !isGameOver) {
      if (isPositionValid(board0, 2)) {
        // The position played 1 and 0
        // The position to be played 2
        playAt(board2, 2);
      } else if (isPositionValid(board2, 0)) {
        // The position played 1 and 2
        // The position to be played 0
        playAt(board0, 0);
      } else if (isPositionValid(board4, 7)) {
        // The position played 1 and 4
        // The position to be played 7
        playAt(board7, 7);
      } else if (isPositionValid(board7, 4)) {
        // The position played 1 and 7
        // The position to be played 4
        playAt(board4, 4);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 2 && !isGameOver) {
      if (isPositionValid(board0, 1)) {
        // The position played 2 and 0
        // The position to be played 1
        playAt(board1, 1);
      } else if (isPositionValid(board1, 0)) {
        // The position played 2 and 1
        // The position to be played 0
        playAt(board0, 0);
      } else if (isPositionValid(board4, 6)) {
        // The position played 2 and 4
        // The position to be played 6
        playAt(board6, 6);
      } else if (isPositionValid(board5, 8)) {
        // The position played 2 and 5
        // The position to be played 8
        playAt(board8, 8);
      } else if (isPositionValid(board6, 4)) {
        // The position played 1 and 6
        // The position to be played 4
        playAt(board4, 4);
      } else if (isPositionValid(board8, 5)) {
        // The position played 2 and 8
        // The position to be played 5
        playAt(board5, 5);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 3 && !isGameOver) {
      if (isPositionValid(board0, 6)) {
        // The position played 3 and 0
        // The position to be played 6
        playAt(board6, 6);
      } else if (isPositionValid(board4, 5)) {
        // The position played 3 and 4
        // The position to be played 5
        playAt(board5, 5);
      } else if (isPositionValid(board5, 4)) {
        // The position played 3 and 5
        // The position to be played 4
        playAt(board5, 4);
      } else if (isPositionValid(board6, 0)) {
        // The position played 3 and 6
        // The position to be played 0
        playAt(board0, 0);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 4 && !isGameOver) {
      if (isPositionValid(board0, 8)) {
        // The position played 4 and 0
        // The position to be played 8
        playAt(board8, 8);
      } else if (isPositionValid(board1, 7)) {
        // The position played 4 and 1
        // The position to be played 7
        playAt(board7, 7);
      } else if (isPositionValid(board2, 6)) {
        // The position played 4 and 2
        // The position to be played 6
        playAt(board6, 6);
      } else if (isPositionValid(board3, 5)) {
        // The position played 4 and 3
        // The position to be played 5
        playAt(board5, 5);
      } else if (isPositionValid(board5, 3)) {
        // The position played 4 and 5
        // The position to be played 3
        playAt(board3, 3);
      } else if (isPositionValid(board6, 2)) {
        // The position played 4 and 6
        // The position to be played 2
        playAt(board2, 2);
      } else if (isPositionValid(board7, 1)) {
        // The position played 4 and 7
        // The position to be played 1
        playAt(board1, 1);
      } else if (isPositionValid(board8, 0)) {
        // The position played 4 and 8
        // The position to be played 0
        playAt(board0, 0);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 5 && !isGameOver) {
      if (isPositionValid(board2, 8)) {
        // The position played 5 and 2
        // The position to be played 8
        playAt(board8, 8);
      } else if (isPositionValid(board3, 4)) {
        // The position played 5 and 3
        // The position to be played 4
        playAt(board4, 4);
      } else if (isPositionValid(board4, 3)) {
        // The position played 5 and 4
        // The position to be played 3
        playAt(board3, 3);
      } else if (isPositionValid(board8, 2)) {
        // The position played 5 and 8
        // The position to be played 2
        playAt(board2, 2);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 6 && !isGameOver) {
      if (isPositionValid(board0, 3)) {
        // The position played 6 and 0
        // The position to be played 3
        playAt(board3, 3);
      } else if (isPositionValid(board2, 4)) {
        // The position played 6 and 2
        // The position to be played 4
        playAt(board4, 4);
      } else if (isPositionValid(board3, 0)) {
        // The position played 6 and 3
        // The position to be played 0
        playAt(board0, 0);
      } else if (isPositionValid(board4, 2)) {
        // The position played 6 and 4
        // The position to be played 2
        playAt(board2, 2);
      } else if (isPositionValid(board7, 8)) {
        // The position played 6 and 7
        // The position to be played 8
        playAt(board8, 8);
      } else if (isPositionValid(board8, 7)) {
        // The position played 6 and 8
        // The position to be played 7
        playAt(board7, 7);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 7 && !isGameOver) {
      if (isPositionValid(board1, 4)) {
        // The position played 7 and 1
        // The position to be played 4
        playAt(board4, 4);
      } else if (isPositionValid(board4, 1)) {
        // The position played 7 and 4
        // The position to be played 1
        playAt(board1, 1);
      } else if (isPositionValid(board6, 8)) {
        // The position played 7 and 6
        // The position to be played 8
        playAt(board8, 8);
      } else if (isPositionValid(board8, 6)) {
        // The position played 7 and 8
        // The position to be played 6
        playAt(board6, 6);
      } else {
        playAtRandom();
      }
    } else if (positionPlayed === 8 && !isGameOver) {
      if (isPositionValid(board0, 4)) {
        // The position played 8 and 0
        // The position to be played 4
        playAt(board4, 4);
      } else if (isPositionValid(board2, 5)) {
        // The position played 8 and 2
        // The position to be played 5
        playAt(board5, 5);
      } else if (isPositionValid(board4, 0)) {
        // The position played 8 and 4
        // The position to be played 0
        playAt(board0, 0);
      } else if (isPositionValid(board5, 2)) {
        // The position played 8 and 5
        // The position to be played 2
        playAt(board2, 2);
      } else if (isPositionValid(board6, 7)) {
        // The position played 8 and 6
        // The position to be played 7
        playAt(board7, 7);
      } else if (isPositionValid(board7, 6)) {
        // The position played 8 and 7
        // The position to be played 6
        playAt(board6, 6);
      } else {
        playAtRandom();
      }
    }
  }

  computerWinNotPossible = 1;
};

// Single player
// Function to operate single-player mode.
const singlePlayerMode = function () {
  showContent(showComponents);
  gameMode = false;
  boardText.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!playedBoxes[index] && !isGameOver && !gameMode) {
        if (gamePlayedFor === 0) singlePlayerOver = false;
        playAt(box, index);
        if (!singlePlayerOver) computerPlays(index);
      }
    });
  });
};

// Single player
// If no position is possible for computer.
const playAtRandom = function () {
  let randomNumber = generateRandomNumber(0, 8);
  while (playedBoxes[randomNumber] === 1)
    randomNumber = generateRandomNumber(0, 8);
  boardText.forEach((box, index) => {
    if (randomNumber === index) playAt(box, index);
  });
};

// Multi player
// played by players.
const multiPlayerMode = function () {
  showContent(showComponents);
  gameMode = true;
  boardText.forEach((box, index) => {
    box.addEventListener('click', function () {
      if (!playedBoxes[index] && !isGameOver && gameMode) playAt(box, index);
    });
  });
};

/************************************************/
/* Event Listeners */
/************************************************/

// Toggle symbol nav.
symbolsNav.addEventListener('click', function () {
  symbols.classList.toggle('u-display-hide');
});

// Choose symbol and toggle the nav.
allSymbol.forEach((el, index) => {
  el.addEventListener('click', function () {
    playerOneCharacter = symbolOnes[index].textContent;
    playerTwoCharacter = symbolTwos[index].textContent;
    symbols.classList.toggle('u-display-hide');
  });
});

// Go Back - option.
backOption.addEventListener('click', function (e) {
  e.preventDefault();
  showContent(showComponents);
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  resetGameConditions(0);
});

// Reset - option.
resetOption.addEventListener('click', function (e) {
  e.preventDefault();
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  resetGameConditions(0);
});

/************************************************/
/* Game Modes */
/************************************************/

// Single player button - listen to event.
singlePlayerButton.addEventListener('click', singlePlayerMode);

// Multi player button - listen to event.
multiPlayerButton.addEventListener('click', multiPlayerMode);
