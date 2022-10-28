"use strict";

/**************************************/
/*  DOM ELEMENTS  */
/**************************************/

const navBox = document.querySelector(".nav-options");
const headText = document.querySelector(".primary-heading");
const backOption = document.querySelector(".back-option");
const resetOption = document.querySelector(".reset-option");
const optionBox = document.querySelector(".game-mode-box");
const spButton = document.querySelector(".sp-button");
const mpButton = document.querySelector(".mp-button");
const board = document.querySelector(".game-board");
const allBox = document.querySelectorAll(".board");
const divBoard1 = document.querySelector(".board-1");
const divBoard2 = document.querySelector(".board-2");
const divBoard3 = document.querySelector(".board-3");
const divBoard4 = document.querySelector(".board-4");
const divBoard5 = document.querySelector(".board-5");
const divBoard6 = document.querySelector(".board-6");
const divBoard7 = document.querySelector(".board-7");
const divBoard8 = document.querySelector(".board-8");
const divBoard9 = document.querySelector(".board-9");
const player1 = document.querySelector(".player-score-1");
const player2 = document.querySelector(".player-score-2");
const note = document.querySelector(".note");

/**************************************/
/*  VARIABLES  */
/**************************************/

let alreadyPlayedPositions = Array.from({ length: 10 }, () => 0);
let playerOneScore = 0,
  playerTwoScore = 0,
  gamePlayedFor = 0,
  activePlayer = 0;
let winColor = "#a9e34b",
  boardColor = "#fff";

/**************************************/
/* SET AND INITIALIZE GAME CONDITIONS */
/**************************************/

const initiate = function () {
  alreadyPlayedPositions = Array.from({ length: 10 }, () => 0);
  activePlayer = 0;
  gamePlayedFor = 0;
  setTimeout(function () {
    allBox.forEach((box, i) => {
      box.style.color = "#000";
      box.textContent = i + 1;
    });
    player1.textContent = playerOneScore;
    player2.textContent = playerTwoScore;
  }, 500);
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
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard4.textContent === divBoard5.textContent &&
    divBoard4.textContent === divBoard6.textContent
  ) {
    divBoard4.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard6.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard7.textContent === divBoard8.textContent &&
    divBoard7.textContent === divBoard9.textContent
  ) {
    divBoard7.style.color = winColor;
    divBoard8.style.color = winColor;
    divBoard9.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard1.textContent === divBoard4.textContent &&
    divBoard1.textContent === divBoard7.textContent
  ) {
    divBoard1.style.color = winColor;
    divBoard4.style.color = winColor;
    divBoard7.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard2.textContent === divBoard5.textContent &&
    divBoard2.textContent === divBoard8.textContent
  ) {
    divBoard2.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard8.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard3.textContent === divBoard6.textContent &&
    divBoard3.textContent === divBoard9.textContent
  ) {
    divBoard3.style.color = winColor;
    divBoard6.style.color = winColor;
    divBoard9.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard1.textContent === divBoard5.textContent &&
    divBoard1.textContent === divBoard9.textContent
  ) {
    divBoard1.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard9.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  } else if (
    divBoard3.textContent === divBoard5.textContent &&
    divBoard3.textContent === divBoard7.textContent
  ) {
    divBoard3.style.color = winColor;
    divBoard5.style.color = winColor;
    divBoard7.style.color = winColor;
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerTwoScore += 1) : (playerOneScore += 1);
    initiate();
  }
};

/**************************************/
/*  MULTI PLAYER MODE  */
/**************************************/

mpButton.addEventListener("click", function () {
  board.classList.remove("display-hide");
  backOption.classList.remove("display-hide");
  resetOption.classList.remove("display-hide");
  optionBox.classList.add("display-hide");
  note.classList.add("display-hide");
  headText.classList.add("display-hide");
  navBox.style.marginTop = "4rem";
  divBoard1.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(1) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard1.style.color = boardColor;
      divBoard1.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[0] = 1;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard2.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(2) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard2.style.color = boardColor;
      divBoard2.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[1] = 2;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard3.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(3) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard3.style.color = boardColor;
      divBoard3.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[2] = 3;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard4.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(4) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard4.style.color = boardColor;
      divBoard4.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[3] = 4;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard5.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(5) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard5.style.color = boardColor;
      divBoard5.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[4] = 5;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard6.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(6) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard6.style.color = boardColor;
      divBoard6.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[5] = 6;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard7.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(7) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard7.style.color = boardColor;
      divBoard7.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[6] = 7;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard8.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(8) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard8.style.color = boardColor;
      divBoard8.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[7] = 8;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });

  divBoard9.addEventListener("click", function () {
    if (
      !alreadyPlayedPositions.includes(9) &&
      !alreadyPlayedPositions.includes(-1)
    ) {
      divBoard9.style.color = boardColor;
      divBoard9.textContent = activePlayer === 0 ? "x" : "o";
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      alreadyPlayedPositions[8] = 9;
      gamePlayedFor += 1;
      gameOver();
    } else if (gamePlayedFor === 9) initiate();
  });
});

/**************************************/
/*  BACK - NAV  */
/**************************************/

backOption.addEventListener("click", function () {
  board.classList.add("display-hide");
  optionBox.classList.remove("display-hide");
  backOption.classList.add("display-hide");
  resetOption.classList.add("display-hide");
  note.classList.remove("display-hide");
  headText.classList.remove("display-hide");
});

/**************************************/
/*  RESET - NAV */
/**************************************/

resetOption.addEventListener("click", function () {
  initiate();
  playerOneScore = 0;
  playerTwoScore = 0;
});
