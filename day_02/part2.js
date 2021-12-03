$

const solution = () => {
    let diff = {
        x: 0,
        y: 0,
        aim: 0
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
    for (let el of input) {
        depth(el[0], el[1]);
    }
    return diff.x * diff.y;
}

console.log(solution());