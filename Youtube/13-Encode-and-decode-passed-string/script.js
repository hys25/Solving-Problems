// TASK: Create an encode function that will accept a string of letters in English. This function should return a string in which vowels are replaced by digits.
// a -> 1, e -> 2, i -> 3, o -> 4, u -> 5
//You also need to create a decode function, which will accept the encrypted string and return the recovered string.

function encode(str) {
	const arr = ['a', 'e', 'i', 'o', 'u'];
	return str.split('').map(elem => {
		let index = arr.indexOf(elem);
		return index !== -1 ? index + 1 : elem;
	}).join('');
}
console.log(encode('hello'));

function decode(str) {
	const obj = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
	return str.split('').map(elem => {
		return isNaN(elem) ? elem : obj[elem];
	}).join('');
}
console.log(decode(encode('hello')));