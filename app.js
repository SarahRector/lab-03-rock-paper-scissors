// import functions and grab DOM elements
import getRandomThrow from './randomThrow.js';

import { checkResult } from '.randomThrow.js';

const button = document.querySelector('#guess-button');
const winOrLose = document.querySelector('#win-lose');
const wins = document.querySelector('total-wins');
const losses = document.querySelector('total-losses');
const draws = document.querySelector('total-draws');

// initialize state
let randomNumber = 1;
let winData = 0;
let lossData = 0;
let DrawData = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {

    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;
    console.log(getRandomThrow(randomNumber));
});


//compare randomThrow to userThrow to see if user wins or not

//log guesses, wins, losses and update textContent