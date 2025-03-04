//Big O of n squared

function findSmallest(array, startIndex) {
    let smallestItem = array[startIndex];
    let smallestIndex = startIndex;
    for (let i = startIndex; i < array.length; i++) {
        if (array[i] < smallestItem) {
            smallestItem = array[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const smallestIndex = findSmallest(array, i);
        if (smallestIndex !== i) {
            [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
        }
    }
    return array;
}

console.log(selectionSort([2,4,6,8,10,1,3,5,7,9]))

