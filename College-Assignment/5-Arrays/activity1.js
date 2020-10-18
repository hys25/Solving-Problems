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
    let i;
    let arr = [];
    let score = 0;
    let sum = 0;

    for ( i = 0; i < +howMuchScores; i++) {
        score = prompt('Write down your scores one by one');
        arr.push(+score);
    }

    arr.forEach(function(item) {
        sum = sum + item;
    });

    document.getElementById("result").innerText = Math.round( sum / arr.length );
}

function clearInputs() {
    document.getElementById("result").innerText = "";
}