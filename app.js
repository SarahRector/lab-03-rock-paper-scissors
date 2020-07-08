// import functions and grab DOM elements
import getRandomThrow from './randomThrow.js';

const button = document.getElementById('guess-button');

// initialize state
let randomNumber = 1;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    console.log(getRandomThrow(randomNumber));
});


//compare randomThrow to userThrow to see if user wins or not

//log guesses, wins, losses and update textContent