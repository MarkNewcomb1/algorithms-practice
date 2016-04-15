//Write a function which takes an array of numbers and returns the minimum of that array.
//[3,4,5] -> 3
//[2, -30] -> -30

//function minimum(arr) {
//	var minSoFar = arr[0];
//	for (var i = 1; i < arr.length; i++) {
//		if(arr[i] < minSoFar) {
//			minSoFar = arr[i];
//		}
//	}
//	return minSoFar;
//}
//
//console.log(minimum([3,4,5]) == 3);
//console.log(minimum([2, -30]) == -30);
//console.log(minimum([0,1,2,-3]) == -3);
//console.log(minimum([0]) == 0);

function maximum(arr) {
    "use strict";
    var maxSoFar = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] > maxSoFar) {
            maxSoFar = arr[i];
        }
    }
    return maxSoFar;
}

console.log(maximum([3,4,5]) == 5);
console.log(maximum([-10, 2]) == 2);

function getTheAverage(arr) {
   "use strict";
    var sumSoFar = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sumSoFar += arr[i];
        var average = (sumSoFar / arr.length);
    }
    return average;
}

console.log(getTheAverage([2, 4, 6]) == 4);

function missingNumber(arr) {
    if (arr.length == 1){
        return arr[0] + 1;
    }
   for (i = 0; i < arr.length; i++) {
        var currentNumber = arr[i];
        var newNumber = arr[i + 1];
       if ((currentNumber + 1) != newNumber) {
           return (currentNumber + 1);
       }
   }

}

console.log(missingNumber([1,2,4]) == 3);
console.log(missingNumber([1,2,3,4,5]) == 6);
console.log(missingNumber([1, 9]) == 2);
console.log(missingNumber([1]) == 2);

//Write a function which takes an array of integers and returns an array with any duplicate integers removed.
//[1,1,2,3,1,2,3] -> [1,2,3]
//[1,4,4,4,2,2,4,4,4] -> [1,4,2]

function removeDuplicates (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i++])
            arr.splice(i, 1);
        }
    return arr;
    }




console.log(removeDuplicates([1,1,2,3,1,2,3]));
