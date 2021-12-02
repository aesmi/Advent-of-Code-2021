const fs = require('fs');

const depthIncrease = (a, b) => {
    return (b > a) ? true : false;
}

function solution() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf-8').split(/\n/).map(Number);
    } catch (e) {
        throw new Error('Issue with input file');
    }
    let increase = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] < input[i]) {
            increase++;
        }
    }
    return increase;
}

console.log(solution());
