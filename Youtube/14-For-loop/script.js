// TASK: Write a function that displays numbers 1 to 100 on the screen. Instead of numbers divisible by 3 the word "Fizz" is displayed, instead of numbers divisible by 5 - "Buzz". If the number divisible by 3 and 5, the function displays the word "FizzBuzz".

for(let i=0; i<=100; i++) {
	if(i%3 === 0) {
		console.log('Fizz');
	} else if (i%5 === 0) {
		console.log('Buzz');
	} else if (i%3 === 0 && i%5 === 0) {
		console.log('Fizz');
	} else {
		console.log(i);
	}
}