// TASK: Caesar's cipher
document.getElementById('in').oninput = function(){
	//encryption
	const offset = 3;
	let help = document.getElementById('help');
	//from code to symbol
	//help.innerHTML = String.fromCharCode(97);
	let str = this.value;
	//from symbol to code
	console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code + offset;
		out += String.fromCharCode(code);
	}
	document.getElementById('out').innerHTML = out;
}

document.getElementById('toSymbol').oninput = function(){
	const offset = 3;
	let str = this.value;
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code - offset;
		out += String.fromCharCode(code);
	}
	document.getElementById('outToSymbol').innerHTML = out;
}