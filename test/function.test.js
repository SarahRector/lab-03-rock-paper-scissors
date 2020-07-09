// IMPORT MODULES under test here:
// import { example } from '../example.js';
import getRandomThrow from '../randomThrow.js';
import { checkResult } from '../randomThrow.js';
const test = QUnit.test;

test('returns string when asked typeof', (expect) => {
    const expected = 'string';
    const actual = typeof getRandomThrow();
    expect.equal(actual, expected);
});

test('returns loss when computer selects paper and player selects rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult (player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns win when computer selects scissors and player selects rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult (player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns draw when computer selects rock and player selects rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult (player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});