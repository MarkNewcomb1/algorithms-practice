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

//SOLUTION:

function removeDupes(arr) {
    "use strict";
    var newArr = []; //we have to declare a new array to store the result
   for (var i = 0; i < arr.length; i++) { //loop through array
       var lookingFor = arr[i]; // the current index through this i loop
       var foundIt = false; //flag variable set to false
       for (var j = 0; j < newArr.length; j++) { //loop through new array
           if (newArr[j] == lookingFor) { //if the index of the new array has the same value as //the original array we passed in
               foundIt = true; //then the flag is set to true, keep looping through new array
           }
       }
       if (!foundIt) { // if we haven't found any similarities, then
           newArr[newArr.length] = lookingFor; //at the end of the new array, push the value of // the the original array to the new one 
       }
   } 
    return newArr; //finally, return new array
}
console.log(removeDupes([1,1,2,3,1,2,3]));

function cmpArr(arrA, arrB) { //accept two arrays to compare
    "use strict";
    if (arrA.length != arrB.length) { //if the length of arrA isn't the same as the length of //the second array, then we already know they're not equal
        return false; //so we return false
    }
    for (var i = 0; i< arrA.length; i++) { //loop through arrA, we've already accounted for the lengths not being equal so we can just loop through array
        if (arrA[i] != arrB[i]) { //we're going through both arrays at the same time
            return false;
        }
    }
    return true;
}

console.log(cmpArr([0], [0]) == true);
console.log(cmpArr([0,1,2], [0,1,2]) == true);

//console.log(removeDupes([1,1,2,3,1,2,3]) == [1,2,3]);
