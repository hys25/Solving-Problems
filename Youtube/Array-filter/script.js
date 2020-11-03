// TASK:Create a function that accepts an array as an argument. It is necessary to print all digits above zero, remove letters and negative digits, sort the array.
let size = ["10px", "3em", "35pt", "-25px", "50%"];

function calc(arr) {
    let newArr = arr.map(function(el) {
        return parseFloat(el);
    });
    newArr = newArr.filter( function(el) {
        if (el > 0) return el;
    });
    newArr.sort((a,b) => { return a-b })
        return newArr;
}
console.log( calc(size) );

// --2--
function calc2(arr) {
let out = [];
    for (let i=0; i<arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
        if (arr[i] >= 0) out.push(arr[i]);
    }
    out.sort(function (a, b) {
        return a-b;
    });
    return out;
}
console.log( calc2(size) );