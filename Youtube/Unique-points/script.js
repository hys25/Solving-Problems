// TASK:Implement the uniquePoints function, the function accepts an array with the objects in which the coordinate points are written. The function should return an array with unique arrays of points, without repeating arrays.
//Реализуйте функцию uniquePoints, функция принимает массив с обьектами, в которых записаны точки координат. Функция должна возвращать массив уникальные массивы точек, без повторяющихся массивов.

const arrPoints = [
    {x: 5, y: 10},
    {x: 1, y: 15},
    {x: 7, y: -5},
    {x: 16, y: 33},
    {x: 1, y: 15},
    {x: 7, y: -5},
    {x: 4, y: 12}
];

function uniquePoints(arr){
    return arr.reduce((acc, point) => 
        acc.some(val => point.x === val.x && point.y === val.y)
        ? acc 
        : [...acc, point], 
        []);
}
console.log(uniquePoints(arrPoints));


// TASK:Output all keys from array
function unique(arr) {
    return Array.from(new Set (arr));
}
console.log(unique([1, 3, 5, 8, 1, 8, 2, 1]));


// TASK:Output all keys, then all values and arrays from array
let recipeArr = [
    ['tomatos',   '10'],
    ['bananas', '40'],
    ['apples',   '20']
];

let recipeMap = new Map( [ 
    ['tomatos',   '10'],
    ['bananas', '40'],
    ['apples',   '20']
] );

for (let goods of recipeMap.keys()) {
    console.log(goods);
}
for (let price of recipeMap.values()) {
    console.log(price);
}
for (let arrays of recipeMap.entries()) {
    console.log(arrays);
}


// TASK:Output unique elements
let arr = [1, 3, 3, 1, 2, 5 ,6 ,6];
// --1--
let newArr1 = [...new Set(arr)];
console.log(newArr1);
// --2--
let newArr2 = arr.filter( (item, index) => {
    return arr.indexOf(item) === index; 
});
console.log(newArr2);
//--3--
let newArr3 = arr.reduce( (result, item) => {
    return result.includes(item) ? result : [...result, item];
}, []);
console.log(newArr3);