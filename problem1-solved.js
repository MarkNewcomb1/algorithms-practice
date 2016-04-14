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