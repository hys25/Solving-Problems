// TASK: Create a program that asks the user to enter grade scores. Start by asking the user how many scores they would like to enter. Then use a loop to request each score and add it to a total. Finally, calculate and display the average for the entered scores.
"use strict";
window.addEventListener("load", function () {
    document.getElementById("howMuchScores").addEventListener("input", checkScores);
});

function checkScores() {
    let scoreValue = document.getElementById("howMuchScores").value;
    if (isNaN(scoreValue) || scoreValue.trim().length == 0) {
        clearInputs();
        document.getElementById("error").innerText = "Write a number!";
        return false;
    } else if (scoreValue > 5) {
        document.getElementById("error").innerText = "You can calculate maximum 5 scores!";
        clearInputs();
        return false;
    } else {
        document.getElementById("error").innerText = "";
        clearInputs();
        return true;
    }
}

function enterScore() {
    let howMuchScores = document.getElementById("howMuchScores").value;
    let counter = 0;
    let sumScore = 0;
    let score = 0;

    while (counter < howMuchScores) {
        score = prompt('Write down your scores one by one');
        sumScore = +sumScore + +score;
        counter = counter + 1;  
    }
    document.getElementById("result").innerText = Math.round(sumScore/howMuchScores);
}

function clearInputs() {
    document.getElementById("result").innerText = "";
}