// Write a function that converts the numbers of the object. By passing a number from 0 to 999, we should get an object with units, dozens and hundreds described in the corresponding properties. For example, for number 245 we should get the next object:
// {
//     "units": 5,
//     "dozens": 4,
//     "hundreds": 2
// }
// If the number is greater than 999, we should generate an error and return an empty object.
'use strict';

class cutNum{
    constructor(a) {
        if(typeof a=='number' && a>=0 && a<1000){
            this.units = a % 10;
            this.dozens = Math.floor(a / 10 % 10);
            this.hundreds = Math.floor(a / 100);
        } else {
            console.log('Error! A number should be from 0 to 999');
        }

    }
}
let number = new cutNum(25);
console.log(number);