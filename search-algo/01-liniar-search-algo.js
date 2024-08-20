function findElement(arr, el) {
let index = 0;
  for (element of arr) {
    if (element == el) {
      return index;
    }
    index++;
  }
}

const nums = [1, 43, 2, 455, 32, 3, 4, 9];

/**
 *  Need to loop throught each element in the arr
 *  Time complexity O(n)
 */

console.log(findElement(nums, 43));
