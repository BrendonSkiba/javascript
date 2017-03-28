
//binary search will run with node
// save the file as createInt.js
// to run the code, type "node createInt.js" (without quotes)
var randomInteger = function(val) {
	var ival = Math.random()*256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}

//main (this is where the functions get called)
var rInt;
var count = 0;
var i;
for (i = 0; i < 65536; i++){
	rInt = randomInteger();
	if (rInt == 64)count++; //notice no {}
	//console.log(rInt+",");
	process.stdout.write(rInt+" ");
}
process.stdout.write("\n\n\n64 hit "+count+" times.\n");
