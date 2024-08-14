function isEvenNum(n) {
    return n % 2 === 0; // 1
}

// Best case: O(1)
// Avg case: O(1)
// Worst case: O(1)

function findMin (arr) {
    let min = arr[0];  // 1
    for(let i = 1; i < arr.length; i++) { // 1
        if(arr[i] < min) { // n
            min = arr[i]; // n
        }
    }
    return min; // n
} 

// Best case: arr = [1,2,3] => O(n)
// Avg case: arr = [2,1,3] => O(n)
// Worst case: arr = [3,2,1] => O(n)

console.log(isEvenNum(32));
console.log(findMin([10,2,3,4,19]));

