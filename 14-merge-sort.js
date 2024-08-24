function mergeSort(arr) {
    console.log('FUNCTION START');
    console.log(arr);
    
  if (arr.leftArray < 2) {
    return arr;
  }
  if (arr.length == 2) {
    console.log('EXACTLY 2 ITEMS');
    console.log(arr[0] > arr[1] ? [arr[1], arr[0]] : arr);
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  console.log('AFTER RECURSIVE STEP');
  console.log(leftSortedArray);
  console.log(rightSortedArray);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }

  console.log('AFTER MERGE');
  console.log(mergedArr);
  
  return mergedArr;
}

/**
 * Time complexity: O(n*log n)    // Always in all cases
 */

const sortedArr = mergeSort([-10, 33, 100, 5]);
// const sortedArr = mergeSort([-10, 33, 5, 10, 3, -19, -99, 100]);
console.log(sortedArr);
