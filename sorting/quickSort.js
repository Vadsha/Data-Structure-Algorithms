function quickSort (array) {
  if(array.length < 2) {
    return array;
  }
  const pivot = array[Math.floor(array.length / 2)];
  const smallerItems = array.filter((item) => item < pivot);
  const largerItems = array.filter((item) => item > pivot);
  return [...quickSort(smallerItems) , pivot , ...quickSort(largerItems)];
}

console.log(quickSort([1,3,5,7,9,2,4,6,8,10]));
