// TASK: Create a program that asks the user to enter grade scores. Use a loop to request each score and add it to a total. Continue accepting scores until the user enters no value (empty input). Finally, calculate and display the average for the entered scores.
"use strict";

function enterScore() {
    let sumScore = 0;
    let score = 0;
    let boolFlag = true;
    let counter = 0;

    do {
        score = prompt('Write down your scores one by one. To stop entering scores just send an empty field!');
        if (score.trim().length == 0) {
            boolFlag = false;
        } else {
            sumScore = +sumScore + +score;
            counter = counter + 1;
        }
    }
    while ( boolFlag == true );
    document.getElementById("result").innerText = Math.round(sumScore/counter);
}

function clearInputs() {
    document.getElementById("result").innerText = "";
}