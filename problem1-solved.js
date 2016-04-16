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

//function compareNumbers(a, b) {
//  return a - b;
//}
//
//function removeDuplicates (arr) {
//    arr.sort(compareNumbers());
//    console.log(arr);
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] == arr[i + 1]){
//            arr.splice(i, 1);
//        }
//        }
//    return arr;
//    }

//SOLUTION:

function removeDupes(arr) {
    "use strict";
    var newArr = [];
   for (var i = 0; i < arr.length; i++) {
       var lookingFor = arr[i];
       var foundIt = false;
       for (var j = 0; j < newArr.length; j++) {
           if (newArr[j] == lookingFor) {
               foundIt = true;
           }
       }
       if (!foundIt) {
           newArr[newArr.length] = lookingFor;
       }
   } 
    return newArr;
}

function cmpArr(arrA, arrB) {
    "use strict";
    if (arrA.length != arrB.length) {
        return false;
    }
    for (var i = 0; i< arrA.length; i++) {
        if (arrA[i] != arrB[i]) {
            return false;
        }
    }
    return true;
}

console.log(cmpArr([0], [0]) == true);
console.log(cmpArr([0,1,2], [0,1,2]) == true);

//console.log(removeDupes([1,1,2,3,1,2,3]) == [1,2,3]);
