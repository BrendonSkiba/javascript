var randomInteger = function(val) {
	var ival = Math.random()*26+97;
	ival = Math.floor(ival);
	return ival;
}
var i, rInt;
var letter = '';
var bas = 0;
for (i = 0; i <262144; i ++){
	rInt = randomInteger();
	if (rInt === 97)bas++;
	letter = String.fromCharCode(rInt);
	process.stdout.write(letter);
}
console.log("\n\n Counting 20 = "+bas);
