$(".field").click(function() {
    if(isCrossTurn(currentPlayer)){
        placeCross($(this));
    }
    else{
        placeZero($(this));
    }
    turnEnd();
});

function isCrossTurn(state){
    if(state == 'x'){
        return true;
    }
    if(state == 'o'){
        return false;
    }
    console.error("Invalid state: " + state);
    return false; 
}

function unitTest_isCrossTurn(){
    console.log("unitTest_isCrossTurn");
    console.assert(isCrossTurn('x') == true, "isCrossTurn('x') == true");
    console.assert(isCrossTurn('o') == false, "isCrossTurn('o') == false");
    console.assert(isCrossTurn('') == false, "isCrossTurn('') == false");
    console.log("unitTest_isCrossTurn ended");
}
unitTest_isCrossTurn();


function placeCross(field){
    if(field.hasClass("clickable")){
        field.removeClass("clickable");
        field.append("<div class=\"x\"><img src=\"../src/img/cross.png\"></div>");
    }
}

function placeZero(field){
    if(field.hasClass("clickable")){
        field.removeClass("clickable");
        field.append("<div class=\"o\"><img src=\"../src/img/zero.png\"></div>");
    }
}


