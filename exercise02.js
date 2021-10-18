// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - nonsense

let rating = 2;

if (rating === 3){
    console.log('YOU ARE A SUPERSTAR!');
}
else if (rating === 2){
    console.log('MEETS EXPECTATIONS');
}
else if (rating === 1){
    console.log('NEEDS IMPROVEMENT');
}
else {
    console.log('INVALID RATING');
}

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`)
}


let password = 'kittymike';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password!');
    }
    else {
        console.log('Password is long enough, but cannot contain spaces');
    }
}
else {
    console.log('Password must be longer!')
}
