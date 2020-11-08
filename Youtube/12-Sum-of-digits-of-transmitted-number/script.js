// TASK: A positive number is passed to the function. The function should return the sum of all digits of the transmitted number.
//console.log(sumOfDigits(123)) //6
//console.log(sumOfDigits(111)) //3

//--1--
function sumOfDigits(num){
	let str = num.toString();
	let arr = [...str];
	return arr.reduce((acc, item) => acc + +item,0)
}
console.log(sumOfDigits(123))
console.log(sumOfDigits(111))
console.log(sumOfDigits(555))
console.log(sumOfDigits(786))

//--2--
function sumOfDigits2(num){
	let sum = 0;
	while(num > 0){
		sum += num % 10;
		num = Math.floor(num/10);
	}
	return sum;
}
console.log(sumOfDigits2(4825))
console.log(sumOfDigits2(19451))
console.log(sumOfDigits2(5575))
console.log(sumOfDigits2(43))

