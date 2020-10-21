"use strict";
window.addEventListener("load", function () {
    setInterval (printTime, 1000);
});

let days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function printTime() {
    let now = new Date();
    output.innerHTML = 'Year - ' + now.getFullYear() + '<br>';
    output.innerHTML += 'Month - ' + months[now.getMonth()] + '<br>';
    output.innerHTML += 'Date(in month) - ' + now.getDate() + '<br>';
    output.innerHTML += 'Day of week - ' + days[now.getDay()] + '<br>';
    output.innerHTML += 'Hour - ' + now.getHours() + '<br>';
    output.innerHTML += 'Minute - ' + now.getMinutes() + '<br>';
    output.innerHTML += 'Seconds - ' + now.getSeconds() + '<br>';
}