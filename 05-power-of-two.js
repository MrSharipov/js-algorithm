function isPowerOfTwo(n) {
    if(n <= 1) {
        return false;
    }
    for(let i = n; i !== 1; i /= 2) {
        if(n % 2 !== 0) {
            return false
        }
    }
    return true;
}

// console.log(isPowerOfTwo(8));

function isPowerOfTwo2(n) {
    if(n <= 1) {
        return false;
    }
    let dividedNumber = n;
    while(dividedNumber !== 1) {
        if(dividedNumber % 2 !== 0){
            return false;
        }
        dividedNumber /= 2;
    }
    return true;
}

// Best case: n = 13 => O(1)
// Avg case: n = O(log n)
// Worst case: n = 1,125,899,906,842,624 => O(log2 n) => O(log n) (50 times repeat)

// console.log(isPowerOfTwo2(11));
// console.log(isPowerOfTwo2(8));
// console.log(isPowerOfTwo2(16));


// The best result O(1)
function isPowerOfTwo3(n) {
    if(n <= 1) {
        return false;
    }
    return (n & (n-1)) === 0;  // O(1)
}

console.log(isPowerOfTwo3(11));
console.log(isPowerOfTwo3(8));
console.log(isPowerOfTwo3(16));
