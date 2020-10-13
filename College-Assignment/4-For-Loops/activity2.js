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
    output = output + "<tr>";
    
    for (let i = rows - 1; i <= cols; i++) {
        if (x == 0) {
            output = output + "<td>" + " " + "</td>"; 
            x = x + 1; 
        } else {
            output = output + "<td>" + i + "</td>"; 
            x = x + 1; 
        };
    };
    
    for (let i = rows; i <= cols; i++) {
        output = output + "<tr>";
        output = output + "<td>" + i + "</td>";
        for (j = rows; j <= cols; j++) {
            output = output + "<td>" + i * j + "</td>";
        };
    };
    output = output + "</table>";
    document.write(output);
};