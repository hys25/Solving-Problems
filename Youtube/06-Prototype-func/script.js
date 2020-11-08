// TASK:Write a function that will multiply each number in the array by the number we will pass when the function is called. Run this as a global array method (in the future, the function can be applied to any other arrays).
const array = [1, 2, 3, 4, 5];
const anotherArray = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n;
//     });
// }
// console.log(multBy(array, 2));

//the same can be written by prototypes.

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n;
        });
}

console.log(array.multBy(2));
console.log(anotherArray.multBy(5));