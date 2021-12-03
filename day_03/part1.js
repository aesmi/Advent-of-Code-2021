const fs = require('fs');

const solution = () => {
    let gamma = '';
    let epsilon = '';
    let freqMap = {
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0]
    }
    try {
        input = fs.readFileSync('input.txt', 'utf-8');
    } catch (e) {
        throw new Exception('File not found');
    }
    input = input.split(/\n/);
    // go through our input file line by line
    for (let line of input) {
        // check every char in the string
        for (let i = 1; i <= line.length; i++) {
            (Number(line[i - 1]) == 0) ? (freqMap[i.toString()][0] += 1) : (freqMap[i.toString()][1] += 1);
        }
    }
    for (let [key, value] of Object.entries(freqMap)) {
        (value[0] > value[1]) ? (gamma += "0", epsilon += "1") : (gamma += "1", epsilon += "0");
    }
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);
    console.log(epsilon * gamma);
}

solution();