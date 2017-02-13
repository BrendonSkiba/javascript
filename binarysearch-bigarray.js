var buildArray = function(range){
	var i, ival;
	var list = new Array();
	for (i = 0; i < range; i++){
		ival = Math.floor(Math.random()*256);
		list[i] = ival;
	}
}

var doSearch = function(array, targetValue) {
var min = 0;
var max = array.length - 1;
var guess;
var i = 1;

	while(min <= max) {
		guess = Math.floor((max + min) / 2); 
		if(array[guess] === targetValue) {
			console.log("Total guesses " + i);
			return guess;
		}
		else if (array[guess] < targetValue) {
			min = guess + 1;
		}
		else {
			max = guess - 1;
		}
		i++;
		console.log("Guess" + guess);
	}
		return -1;
}

var values = [10,43,123,500,12,60,33,59,2,1,40,8];
console.log("before search");
console.log(values);
values.sort(function(a, b){return a-b});
//values.sort();
console.log("after search");
console.log(values);
var searchValue = 10;
var result = doSearch(values, searchValue);
console.log("found value " +searchValue+"at index " + result);
