function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;
  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (element === sortedArr[middleIndex]) {
    return middleIndex;
  }

  if (sortedArr[middleIndex] < element) {
    startIndex = middleIndex + 1;
    return findElement(sortedArr.slice(startIndex, endIndex, element));
  } else {
    endIndex = middleIndex - 1;
    return findElement(sortedArr.slice(startIndex, endIndex, element));
  }
}

/**
 *  In recursibe binary search, we search by dividing array into to parts repeatedly
 *  Time complexity O(log n)
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findElement(nums, 9));
