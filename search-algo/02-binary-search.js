function findElement(sortedArr, element) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    while( startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if(element === sortedArr[middleIndex]) {
            return middleIndex;
        }

        if(sortedArr[middleIndex] < element) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
}

/**
 *  In binary search, we search by dividing array into to parts repeatedly
 *  Time complexity O(log n)
 */

const nums = [1,2,3,4,5,6,7,8,9,10]

console.log(findElement(nums, 9));
