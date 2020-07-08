export default function getRandomThrow() {

    const randomNumber = Math.ceil(Math.random() * 3);
    
    if (randomNumber === 1) {
        return 'rock';       
    } else if (randomNumber === 2) {
        return 'paper';
    } else return 'scissors';
}

export function checkResult(player, computer) {
    if (player === 'rock' && computer === 'paper')
        return 'loss';
    if (player === 'rock' && computer === 'scissors')
        return 'win';
    if (player === 'rock' && computer === 'rock')
        return 'draw';
    
    if (player === 'paper' && computer === 'paper')
        return 'draw';
    if (player === 'paper' && computer === 'scissors')
        return 'loss';
    if (player === 'paper' && computer === 'rock')
        return 'win';

    if (player === 'scissors' && computer === 'paper')
        return 'win';
    if (player === 'scissors' && computer === 'scissors')
        return 'draw';
    if (player === 'scissior' && computer === 'rock')
        return 'loss';
}
    