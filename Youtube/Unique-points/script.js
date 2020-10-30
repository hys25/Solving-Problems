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

}
console.log(unique([1, 3, 5, 8, 1, 8, 2, 9, 0]))

// TASK:Output all keys, then all values and arrays from array
let recipeArr = [
    ['огурцов',   '500 гр'],
    ['помидоров', '350 гр'],
    ['сметаны',   '50 гр']
];


let recipeMap = new Map( [ 
    ['огурцов',   '500 гр'],
    ['помидоров', '350 гр'],
    ['сметаны',   '50 гр']
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