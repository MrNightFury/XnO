
function clearField() {
    for (let i = 1; i < 10; i++) {
        let divElement = document.getElementById(`field${i}`); 
        divElement.innerHTML = '';
    }
}

function turnEnd() {
    let result = checkWin();
    if (result == STATE.CROSS || result == STATE.ZERO || result == STATE.DRAW) {
        displayResult(result);
        clearField();
        currentPlayer = 'x';
    } else {
        changePlayer();
    }
}

function testClear() {
    console.log("Checking tests of clearing...");
    function checkNotNone() {
        let flag = false;
        for (let i = 1; i < 10; i++) {
            let divElement = document.getElementById(`field${i}`); 
            if (divElement.innerHTML != '') {
                flag = true;
            }
        }
        return flag;
    }
    let flag = checkNotNone();
    console.assert(flag == true);
    clearField();
    flag = checkNotNone();
    console.assert(flag == false);
    console.log("Tests of clearing is over")
}
testClear();
