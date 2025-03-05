//Divide & Conquer
// Given an array, add up all the numbers and return total

function sumUp(arr) {
    if(arr.length == 0) return 0;
    if (arr.length == 1) return arr[0];
    return arr[0] + sumUp(arr.slice(1));
}
// console.log(sumUp([1,2,3,4,5,6]))

//----------------------------------------------


// Write a recursive function to count the number of items in a list.
// Base case - array length 0
// Recursive case - array length > 0
function arrayLength(arr) {
    if(arr.length == 0) return 0;
    return 1 + arrayLength(arr.slice(1));
}
// console.log(arrayLength([1,2,3,4,5,6]))

//----------------------------------------------


//Find the maximum number in a list.
function findMax(arr) {
    if(arr.length == 0) return 0;
    if(arr.length == 1) return arr[0];
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}
// console.log(findMax([1,2,3,4]))
/*
1 , maxofRest(2,3,4)
1 , [2, maxofRest(3,4)]
1 , [2, {3, maxofRest(4)}]
1 , [2, {3, 4}]
1 , [2, 4]
1 , 4
4
*/

//----------------------------------------------