// Big 0 : log n base 2

function binarySearch(array , item) {
    let start = 0;
    let end = array.length - 1;
    let middle;
    while(start <= end) {
        middle = Math.floor((start + end) / 2);
        if(array[middle] === item) {
            return middle;
        } else if(array[middle] > item) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return null;
}

console.log(binarySearch([1,2,3,4,5] , 3));
console.log(binarySearch([1,2,3,4,5] , 1));
console.log(binarySearch([1,2,3,4,5] , -1));
