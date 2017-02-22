// Write a function named printEvenBetween that takes in two numbers and will return an array of all the even numbers between the given two numbers.

function printEvenBetween(numOne,numTwo){
	var evenNums = []; 
	for (var i = 1; i < numTwo; i++){
	 if (i % 2 == 0){
	 	evenNums.push(i);
	 }
	}
  }