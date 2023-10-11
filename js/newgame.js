
function turnEnd() {
    let field = getFieldState();
    let result = checkWin(field);
    if (result == STATE.CROSS || result == STATE.ZERO || result == STATE.DRAW) {
        displayResult(result);
        clearField();
        currentPlayer = 'x';
    } else {
        changePlayer();
    }
}
function clearField() {
    for (let i = 1; i < 10; i++) {
        let divElement = document.getElementById(`field${i}`); 
        divElement.innerHTML = '';
        divElement.classList.add('clickable');
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
    let divElement = document.getElementById(`field1`); 
    divElement.innerHTML = "1";
    let flag = checkNotNone();
    console.assert(flag == true);
    clearField();
    flag = checkNotNone();
    console.assert(flag == false);
    console.log("Tests of clearing is over")
}
testClear();

