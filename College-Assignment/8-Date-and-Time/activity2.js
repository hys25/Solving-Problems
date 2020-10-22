"use strict";

window.addEventListener("load", function () {
  document.getElementById("date").addEventListener("change", inputChange);
});

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function inputChange() {
  let value = document.getElementById("date").value;
  let date = new Date(value);

  let convertToYear = date.getFullYear();
  let convertToMonth = date.getMonth();
  let convertToDay = date.getDate();
  let convertToDayOfWeek = date.getDay();

  document.getElementById("year").innerText = convertToYear;
  document.getElementById("month").innerText = months[convertToMonth];
  document.getElementById("day").innerText = days[convertToDayOfWeek] + ' ' + convertToDay;
}
