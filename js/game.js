const STATE = {
    NONE: 0,
    ZERO: -1,
    CROSS: 1,
    DRAW: 2,
    ERR: 3
}

var currentPlayer = 'x'; // 'x' or 'o'

var curField;

function clearField() {

}

function turnEnd() {

}

function changePlayer() {
    
}

/**
 * 
 * @param {[[number, number, number], [number, number, number], [number, number, number]]} field 
 * @returns 
 */
function checkWin(field) {
    if (field.length != 3) {
        console.error("Incorrect field");
        return STATE.ERR;
    }
    for (let i = 0; i < 3; i++) {
        if (field[i].length != 3) {
            console.error("Incorrect field");
            return STATE.ERR;
        }
    }

    let winners = {};
    let hasTurns = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (field[i][j] == STATE.NONE) {
                hasTurns = true;
            }
        }
        if (field[i][0] == field[i][1] && field[i][1] == field[i][2]) {
            winners[field[i][0]] = true;
        }
        if (field[0][i] == field[1][i] && field[1][i] == field[2][i]) {
            winners[field[0][i]] = true;
        }
    }
    if (field[0][0] == field[1][1] && field[1][1] == field[2][2]) {
        winners[field[0][0]] = true;
    }
    if (winners[STATE.CROSS] && winners[STATE.ZERO]) return STATE.DRAW;
    if (winners[STATE.CROSS]) return STATE.CROSS;
    if (winners[STATE.ZERO]) return STATE.ZERO;
    return hasTurns ? STATE.NONE : STATE.DRAW;
}

function test_checkWin() {
    let field1 = [ // STATE.CROSS
        [STATE.CROSS, STATE.CROSS, STATE.CROSS],
        [STATE.NONE, STATE.NONE, STATE.NONE],
        [STATE.NONE, STATE.NONE, STATE.NONE]
    ]
    let field2 = [ // STATE.ZERO
        [STATE.ZERO, STATE.CROSS, STATE.CROSS],
        [STATE.NONE, STATE.ZERO, STATE.CROSS],
        [STATE.CROSS, STATE.CROSS, STATE.ZERO]
    ]
    let field3 = [ // STATE.CROSS
        [STATE.ZERO, STATE.CROSS, STATE.ZERO],
        [STATE.NONE, STATE.CROSS, STATE.NONE],
        [STATE.NONE, STATE.CROSS, STATE.NONE]
    ]
    let field4 = [ // STATE.NONE
        [STATE.CROSS, STATE.ZERO, STATE.CROSS],
        [STATE.NONE, STATE.ZERO, STATE.CROSS],
        [STATE.ZERO, STATE.CROSS, STATE.NONE]
    ]
    let field5 = [ // STATE.ERR
        []
    ]
    let field6 = [ // STATE.DRAW
        [STATE.CROSS, STATE.ZERO, STATE.CROSS],
        [STATE.CROSS, STATE.ZERO, STATE.CROSS],
        [STATE.CROSS, STATE.ZERO, STATE.NONE]
    ]
    let field7 = [ // STATE.DRAW
        [STATE.CROSS, STATE.CROSS, STATE.ZERO],
        [STATE.ZERO, STATE.ZERO, STATE.CROSS],
        [STATE.CROSS, STATE.ZERO, STATE.CROSS]
    ]
    console.log("Checking tests...");
    console.assert(checkWin(field1) == STATE.CROSS, "Not STATE.CROSS on field1", checkWin(field1))
    console.assert(checkWin(field2) == STATE.ZERO, "Not STATE.ZERO on field2", checkWin(field2))
    console.assert(checkWin(field3) == STATE.CROSS, "Not STATE.CROSS on field3", checkWin(field3))
    console.assert(checkWin(field4) == STATE.NONE, "Not STATE.NONE on field4", checkWin(field4))
    console.assert(checkWin(field5) == STATE.ERR, "Not STATE.ERR on field5", checkWin(field5))
    console.assert(checkWin(field6) == STATE.DRAW, "Not STATE.DRAW on field6", checkWin(field6))
    console.assert(checkWin(field7) == STATE.DRAW, "Not STATE.DRAW on field7", checkWin(field7))
    console.log("Tests end")
}

test_checkWin();