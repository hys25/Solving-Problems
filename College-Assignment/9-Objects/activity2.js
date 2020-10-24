"use strict";

const TEMPERATURE_DIFFERENCE = 32;
const TEMPERATURE_RATIO = 5 / 9;

function Temperature(fahrenheit=null, celsius=null) {
  this.fahrenheit = fahrenheit;
  this.celsius = celsius;

  this.fahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - TEMPERATURE_DIFFERENCE) * TEMPERATURE_RATIO;
    return celsius;
  };

  this.celsiusToFahrenheit = function(celsius) {
    let fahrenheit = celsius / TEMPERATURE_RATIO + TEMPERATURE_DIFFERENCE;
    return fahrenheit;
  };
}

window.addEventListener("load", function () {
  let elements = document.getElementsByTagName("input");

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("focus", inputFocus);
    elements[i].addEventListener("input", inputInput);
  }

  document.getElementById("start").focus();
});

function inputFocus() {
  document.activeElement.select();

  document.getElementById("error").innerText = 
    "Enter " + document.activeElement.id + " value.";
}

function inputInput() {
  let value = document.activeElement.value;

  if (checkInput()) {
    document.getElementById("error").innerText = "";
    let table = createTable();
    if (table != null) {
      displayTable(table);
    }
  }
}

function checkInput() {
  let value = document.activeElement.value;
  if (isNaN(value) || value.trim().length == 0) {
    document.getElementById("error").innerText = 
      document.activeElement.id + " must be a number!";
    return false;
  }

  let elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    value = elements[i].value;
    if (isNaN(value) || value.trim().length == 0) {
      return false;
    }
  }
  
  return true;
}

function createTable() {
  let start = Number(document.getElementById("start").value);
  let stop = Number(document.getElementById("stop").value);
  let step = Number(document.getElementById("step").value);

 
  let table = [];
  for (let fahrenheit = start; fahrenheit <= stop; fahrenheit += step) {
    let element = new Temperature();
    element.fahrenheit = fahrenheit;
    element.celsius = element.fahrenheitToCelsius(fahrenheit);
    table.push(element);
  }

  return table;
}

function displayTable(table) {
  let result = "";

  for (let row = 0; row < table.length; row++) {
    result += `<tr><td>${table[row].fahrenheit.toFixed(1)}</td>`;
    result += `<td>${table[row].celsius.toFixed(1)}</td></tr>`;
  }

  document.getElementById("tbody").innerHTML = result;
}