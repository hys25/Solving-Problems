// TASK: Write a function that checks if the string is a palindrome or not. Return true of false.
"use strict";
 const palindrom = (str) => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}
console.log(palindrom("abba"));
