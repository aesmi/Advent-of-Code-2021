const fs = require('fs');

const solution = () => {
    let diff = {
        x: Number(0),
        y: Number(0),
        aim: Number(0)
    };

    const depth = (dir, val) => {
        switch (dir[0]) {
            case 'f':
                diff.y = diff.y + (diff.aim * val)
                diff.x = diff.x + val;
                break;
            case 'u':
                diff.aim = diff.aim - val;
                break;
            case 'd':
                diff.aim = diff.aim + val;
                break;
            default: return;
        }
    }

    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf-8');
    } catch (e) {
        throw new Exception('File not found');
    }
    input = input.split(/\n/).map(el => el.split(' ')).map(el => [el[0], Number(el[1])]);
    for (let i = 0; i < input.length; i++) {
        depth(input[i][0], input[i][1]);
    }
    return diff.x * diff.y;
}


console.log(solution());