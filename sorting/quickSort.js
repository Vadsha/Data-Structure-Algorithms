function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[Math.floor(array.length / 2)];
  const smallerItems = [];
  const largerItems = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      smallerItems.push(array[i]);
    } else if (array[i] > pivot) {
      largerItems.push(array[i]);
    }
  }
  return [...quickSort(smallerItems), pivot, ...quickSort(largerItems)];
}

console.log(quickSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]));
