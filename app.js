// import functions and grab DOM elements
import getRandomThrow from './randomThrow.js';

import { checkResult } from './randomThrow.js';

const button = document.querySelector('#guess-button');
const winOrLose = document.querySelector('#win-lose');
const wins = document.querySelector('#total-wins');
const losses = document.querySelector('#total-losses');
const draws = document.querySelector('#total-draws');

// initialize state
let randomNumber = 0;
let winData = 0;
let lossData = 0;
let drawData = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {

    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;

    const computerGuess = getRandomThrow();
    console.log(getRandomThrow(randomNumber));

    let game = checkResult(userGuess, computerGuess);
    if (game === 'win') {
        winOrLose.textContent = 'You Won!!!';
        winData++;
        wins.textContent = winData + ' wins';
        
    } else if (game === 'lose') {
        winOrLose.textContent = 'You lost!!!';
        lossData++;
        losses.textContent = lossData + ' losses';

    } else {
        winOrLose.textContent = 'Its a draw!!';
        drawData++;
        draws.textContent = drawData + ' draws';
    }
    console.log(drawData);
});


//compare randomThrow to userThrow to see if user wins or not

//log guesses, wins, losses and update textContent