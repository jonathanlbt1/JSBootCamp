let num = 7;

if (num == 7) {
    console.log('Lucky!');
}
else {
    console.log('BAD!');
}

num == 7 ? console.log('Lucky!') : console.log('BAD!');

let state = 'offline';

//let color;

/*
if (state === 'offline') {
    color = 'red';
}
else {
    color = 'green';
}
*/

let color = state === 'offline' ? 'red' : 'green';
console.log(color)
