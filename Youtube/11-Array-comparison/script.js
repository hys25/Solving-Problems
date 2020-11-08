// TASK: An array of integers and number k are passed to the function. It is necessary to write a function that will return a boolean value. If there are two numbers in the array and their sum is equal to number k print - true, in the other case print - false.
//console.log(check([10, 15, 3, 7], 17)) //should be true
//console.log(check([10, 15, 3, 7], 20)) //should be false

function check(arr, k){
	for (let i=0; i<arr.length; i++){
		for (let j=i+1; j<arr.length; j++){
			if(arr[i] + arr[j] == k){
				return true;
			}
		}
	} return false;
}
console.log(check([10, 15, 3, 7], 17))
console.log(check([10, 15, 3, 7], 20))

console.log(check([10, 15, 3, 9], 17))
console.log(check([10, 15, 10, 5], 20))
