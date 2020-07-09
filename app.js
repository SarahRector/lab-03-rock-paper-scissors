// import functions and grab DOM elements
import getRandomThrow from './randomThrow.js';

import { checkResult } from './randomThrow.js';

const button = document.querySelector('#guess-button');
const winOrLose = document.querySelector('#win-lose');
const wins = document.querySelector('#total-wins');
const losses = document.querySelector('#total-losses');
const draws = document.querySelector('#total-draws');
const totalTries = document.querySelector('#total-tries');

// initialize state
let randomNumber = 1;
let winData = 0;
let lossData = 0;
let drawData = 0;
let triesData = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    
    triesData++;
    totalTries.textContent = triesData + ' tries so far';

    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;

    const computerGuess = getRandomThrow();


    let game = checkResult(userGuess, computerGuess);
    
    console.log('computerGuess' + computerGuess);
    console.log('userGuess' + userGuess);
    console.log(game);
    if (game === 'win') {
        winOrLose.textContent = 'You Won!!!';
        winData++;
        wins.textContent = winData + ' wins';
        
    } else if (game === 'loss') {
        winOrLose.textContent = 'You lost!!!';
        lossData++;
        losses.textContent = lossData + ' losses';

    } else {
        winOrLose.textContent = 'Its a draw!!';
        drawData++;
        draws.textContent = drawData + ' draws';
    }
    
});


//compare randomThrow to userThrow to see if user wins or not

//log guesses, wins, losses and update textContent