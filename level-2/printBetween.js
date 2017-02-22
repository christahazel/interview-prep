// Write a function named printBetween that takes in two arguments. Assume they are integers. This function will return an array of the numbers between those two arguments.


function printBetween (intOne, intTwo){
	var printNums = []; 

	for (var i = intTwo; i <= intOne; i++){
		printNums.push(i);
	}
};

