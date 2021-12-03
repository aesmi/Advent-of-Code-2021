const fs = require('fs');

const solution = () => {
    let diff = {
        x: 0,
        y: 0
    };

    const depth = (dir, val) => {
        switch (dir[0]) {
            case 'f': diff.x = diff.x + val;
                break;
            case 'u': diff.y = diff.y - val;
                break;
            case 'd': diff.y = diff.y + val;
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
    for (let i of input) {
        depth(i[0], i[1]);
    }
    return diff.x * diff.y;
}


console.log(solution());