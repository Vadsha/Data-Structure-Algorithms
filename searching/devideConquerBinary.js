//Binary search using divide and conquer / recursion

function devideConquerBinary(arr, item, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Item not found
    }

    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
        return middle;
    } else if (arr[middle] > item) {
        return devideConquerBinary(arr, item, start, middle - 1);
    } else {
        return devideConquerBinary(arr, item, middle + 1, end);
    }
}
const result = devideConquerBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);
console.log(result);
