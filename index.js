"use strict";

const divBox1 = document.querySelector(".box-1");
const divBox2 = document.querySelector(".box-2");
const divBox3 = document.querySelector(".box-3");
const divBox4 = document.querySelector(".box-4");
const divBox5 = document.querySelector(".box-5");
const divBox6 = document.querySelector(".box-6");
const divBox7 = document.querySelector(".box-7");
const divBox8 = document.querySelector(".box-8");
const divBox9 = document.querySelector(".box-9");
const player1 = document.querySelector(".player--1-score");
const player2 = document.querySelector(".player--2-score");
const allBoxes = document.querySelectorAll(".game--box");

/////////////////////////////////////////////////////////

let alreadyPlayedPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerOneScore = 0,
  playerTwoScore = 0,
  playedFor = 0;
/////////////////////////////////////////////////////////

// SET AND INITIALIZE GAME CONDITIONS
const initiate = function () {
  alreadyPlayedPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  activePlayer = 0;
  playedFor = 0;
  setTimeout(function () {
    allBoxes.forEach((box, i) => {
      box.style.color = "#000";
      box.textContent = i + 1;
    });
    player1.textContent = playerOneScore;
    player2.textContent = playerTwoScore;
  }, 1000);
};
/////////////////////////////////////////////////////////

// CHECK WIN CONDITION
const iswon = function () {
  if (
    divBox1.textContent === divBox2.textContent &&
    divBox1.textContent === divBox3.textContent
  ) {
    divBox1.style.color = "#a9e34b";
    divBox2.style.color = "#a9e34b";
    divBox3.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox4.textContent === divBox5.textContent &&
    divBox4.textContent === divBox6.textContent
  ) {
    divBox4.style.color = "#a9e34b";
    divBox5.style.color = "#a9e34b";
    divBox6.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox7.textContent === divBox8.textContent &&
    divBox7.textContent === divBox9.textContent
  ) {
    divBox7.style.color = "#a9e34b";
    divBox8.style.color = "#a9e34b";
    divBox9.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox1.textContent === divBox4.textContent &&
    divBox1.textContent === divBox7.textContent
  ) {
    divBox1.style.color = "#a9e34b";
    divBox4.style.color = "#a9e34b";
    divBox7.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox2.textContent === divBox5.textContent &&
    divBox2.textContent === divBox8.textContent
  ) {
    divBox2.style.color = "#a9e34b";
    divBox5.style.color = "#a9e34b";
    divBox8.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox3.textContent === divBox6.textContent &&
    divBox3.textContent === divBox9.textContent
  ) {
    divBox3.style.color = "#a9e34b";
    divBox6.style.color = "#a9e34b";
    divBox9.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox1.textContent === divBox5.textContent &&
    divBox1.textContent === divBox9.textContent
  ) {
    divBox1.style.color = "#a9e34b";
    divBox5.style.color = "#a9e34b";
    divBox9.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  } else if (
    divBox9.textContent === divBox5.textContent &&
    divBox9.textContent === divBox7.textContent
  ) {
    divBox9.style.color = "#a9e34b";
    divBox5.style.color = "#a9e34b";
    divBox7.style.color = "#a9e34b";
    alreadyPlayedPositions[9] = -1;
    activePlayer === 0 ? (playerOneScore += 1) : (playerTwoScore += 1);
    initiate();
  }
};

/////////////////////////////////////////////////////////

// GAME CLICK EVENTS
let activePlayer = 0;

divBox1.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(1) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox1.style.color = "#fff";
    divBox1.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[0] = 1;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox2.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(2) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox2.style.color = "#fff";
    divBox2.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[1] = 2;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox3.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(3) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox3.style.color = "#fff";
    divBox3.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[2] = 3;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox4.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(4) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox4.style.color = "#fff";
    divBox4.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[3] = 4;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox5.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(5) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox5.style.color = "#fff";
    divBox5.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[4] = 5;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox6.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(6) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox6.style.color = "#fff";
    divBox6.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[5] = 6;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox7.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(7) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox7.style.color = "#fff";
    divBox7.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[6] = 7;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox8.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(8) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox8.style.color = "#fff";
    divBox8.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[7] = 8;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

divBox9.addEventListener("click", function () {
  if (
    !alreadyPlayedPositions.includes(9) &&
    !alreadyPlayedPositions.includes(-1)
  ) {
    divBox9.style.color = "#fff";
    divBox9.textContent = activePlayer === 0 ? "x" : "o";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    alreadyPlayedPositions[8] = 9;
    playedFor += 1;
    iswon();
  } else if (playedFor === 9) initiate();
});

/////////////////////////////////////////////////////////
