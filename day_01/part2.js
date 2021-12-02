const fs = require('fs');

function solution() {
    let k;
    try {
        k = fs.readFileSync('input.txt', 'utf-8').split(/\n/).map(Number);
    } catch (e) {
        throw new Error('Issue with input file');
    }
    let increase = 0;
    for (let i = 3; i < k.length; i++) {
        let a = k[i - 3] + k[i - 2] + k[i - 1];
        let b = k[i - 2] + k[i - 1] + k[i];
        if (b > a) {
            increase++;
        }
    }
    return increase;
}

console.log(solution());