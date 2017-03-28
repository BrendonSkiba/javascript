//binary search will run with node
// save the file as createIntLower.js
// to run the code, type "node createIntLower.js" (without quotes)
var randomInteger = function(val) {
	var ival = Math.random()*26+97;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}

//main (this is where the functions get called)
var rInt;
var i;
for (i = 0; i < 65536; i++){
	rInt = randomInteger();
	letter = String.fromCharCode(rInt);
	process.stdout.write(letter);
//console.log(letter);
//document.write(5 + 6);

}
