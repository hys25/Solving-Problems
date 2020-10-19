"use strict";
            
window.addEventListener("load", function () {
    document.getElementById("startingValue").addEventListener("input", checkScores);
    document.getElementById("endingValue").addEventListener("input", checkScores);
});
function checkScores() {
    let id = document.activeElement.id;
    let value = document.getElementById(id).value;
    if (isNaN(value) || value.trim().length == 0) {
        document.getElementById("error").innerText = "Write a number!";
        return false;
    } else if (value > 10) {
        document.getElementById("error").innerText = "You can calculate maximum 10!";
        return false;
    } else {
        document.getElementById("error").innerText = "";
        return true;
    }
}

function createTable(){
    let rows = document.getElementById("startingValue").value;
    let cols = document.getElementById("endingValue").value;
    let j = rows;
    let output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
    let x = 0;
    let arr = [];
    let arr1 = [];
    
    for (let i = rows - 1; i <= cols; i++) {
        if (x == 0) {
            arr1.push("");
            x = x + 1; 
        } else {
            arr1.push(i);
            x = x + 1; 
        };
    };
    arr.push(arr1)
    for (let i = rows; i <= cols; i++) {
        let arr2 = [];
        arr2.push(i);
        for (j = rows; j <= cols; j++) {
            arr2.push(i * j);
        };
        arr.push(arr2)
    };

    for (let i = 0; i <= arr.length-1; i++) {
        output = output + "<tr>";
        for (let j = 0; j <= arr[i].length-1; j++) {
            output = output + "<td>" + arr[i][j] + "</td>";
        };
    };
        document.write(output);
};