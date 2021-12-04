const fs = require('fs');

const solution = () => {
    let win = false;
    let [bingoNums, gameBoards] = genBoards();
    while (win == false) {
        checkBingo(gameBoards);
    }
}

const checkBingo = (boards, bingoNum) => {
    boards.forEach(board => {
        //check rows
        return (checkRows(board) || checkColumns(board) || checkDiagnoals(board));
        //check columns
        //check diagnoals
    })
}

const checkRows = (board) => {
    for (row in board) {
    }
}

const checkColumns = (board) => {

}

const checkDiagonals = (board) => {

}


const genBoards = () => {
    try {
        input = fs.readFileSync('input.txt', 'utf-8');
    } catch (e) {
        throw new Exception('File not found');
    }
    input = input.split(/\n/).filter((str) => str !== "");
    let bingoNums = input.shift().split(",");
    input = input.map(el => el.split(/\s+/)).flat().filter((str) => str !== '');
    let boards = [];
    while (input.length !== 0) {
        let board = [];
        for (let j = 0; j < 5; j++) {
            let row = [];
            for (let i = 0; i < 5; i++) {
                row.push(input.shift())
            }
            board.push(row);
            row = [];
        }
        boards.push(board);
        board = [];
    }
    return [bingoNums, boards];
}

solution();