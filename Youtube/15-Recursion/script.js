// TASK: Execute the function that will work with any number of calls correctly. A number is always passed to the function (it is not necessary to check the number).
//console.log(add()); //0
//console.log(add(2)()); //2
//console.log(add(2)(1)()); //3
//console.log(add(5)(-1)(2)()); //6

function add(n) {
	if(n === undefined) return 0;
	let sum = n;
	return  function recursive(num) {
		if(num === undefined) return sum;
		sum += num;
		return recursive;
	}
}

console.log(add());
console.log(add(2)());
console.log(add(2)(1)());
console.log(add(5)(-1)(2)());