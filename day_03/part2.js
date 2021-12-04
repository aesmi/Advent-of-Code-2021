const fs = require('fs');

const solution = () => {
    let freqMap = {
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        // '6': [0, 0],
        // '7': [0, 0],
        // '8': [0, 0],
        // '9': [0, 0],
        // '10': [0, 0],
        // '11': [0, 0],
        // '12': [0, 0]
    }

    try {
        input = fs.readFileSync('input.txt', 'utf-8');
    } catch (e) {
        throw new Exception('File not found');
    }
    input = input.split(/\n/);
    for (let line of input) {
        // check every char in the string
        for (let i = 1; i <= line.length; i++) {
            (Number(line[i - 1]) == 0) ? (freqMap[i.toString()][0] += 1) : (freqMap[i.toString()][1] += 1);
        }
    }
    let oxygen = [...input];
    let carbon = [...input];
    // for (let line of input) {
    //     for (let i = 1; i <= line.length; i++) {
    //         if (freqMap[i.toString()][0] <= freqMap[i.toString()][1]) {
    //             oxygen.splice((Array.prototype.indexOf(line) - oxyCount), 1);
    //             oxyCount++;
    //         } else {
    //             carbon.splice((Array.prototype.indexOf(line) - carbCount), 1);
    //             carbCount++;
    //         }
    //         console.log(oxygen);
    //     }
    // }
    console.log(freqMap);
    for (let i = 1; i <= input[0].length; i++) {
        if (freqMap[i][0] >= freqMap[i][1]) {
            for (let line of input) {
                if (line[i - 1] == "1") {
                    oxygen.splice((oxygen.indexOf(line)), 1);
                } else {
                    carbon.splice((carbon.indexOf(line)), 1);
                }
            }
        } else {
            for (let line of input) {
                if (line[i - 1] == "0") {
                    oxygen.splice((oxygen.indexOf(line)), 1);
                    //oxyCount++;
                } else {
                    carbon.splice((carbon.indexOf(line)), 1);
                    //carbCount++;
                }
            }
        }
        // console.log(oxygen);
        // console.log(carbon);
        console.trace();
    }
    oxy = oxygen[0];
    carb = oxygen[0];
}


solution();