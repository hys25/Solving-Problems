'use strict'

class hashGenerator{
	//startSymbolCode (int)
	//finishtSymbolCode (int)
	//hashLength (int)
	//hash (string || false)
	constructor(hashLength){
		this.startSymbolCode = 48;
		this.finishtSymbolCode = 126;
		if(!isNaN(parseInt(hashLength))){
			this.hashLength = parseInt(hashLength);
			this.generateHash();
		} else {
			this.hash = false;
		}
	}
	randomInteger(min,max){
		let rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}
	generateHash(){
		this.hash = '';
		for(let i = 0; i < this.hashLength; i++){
			this.hash += String.fromCharCode(this.randomInteger(this.startSymbolCode, this.finishtSymbolCode));
		}
	}
}
let hash = new hashGenerator(40);
console.log (hash.hash);