var randomInteger = function(val) {
	var ival = Math.random()*10+48;
	ival = Math.floor(ival);
	return ival;
}
var i, rInt;
var letter = '';

for (i = 0; i <65536; i ++){
	rInt = randomInteger();
	if (rInt === 97);
	letter = String.fromCharCode(rInt);

process.stdout.write(letter);
	
}

console.log(letter);
