function isPrime(n) {
    for(let i = 2; i < n; i++) { // 1
        if(n % i === 0) { // n
            return false; // 1
        };
    }
    return true; // 1
}

// Best case: n = 1 OR n = 2 => O(1)
// Avg case: O(n)
// Worst case: n = 27,277 => O(n)

// const res = isPrime(5);
// console.log(res);


// Improved way
function isPrime2(n) {
    for(let i = 2; i < Math.sqrt(n); i++) {
        console.log('Running...');
        if(n % i === 0) {
            return false;
        };
    }
    return true;
}

// Best case: n = 1 OR n = 2 => O(1)
// Avg case: O(sqrt(n))
// Worst case: n = 27,277 => O(sqrt(n))

const res2 = isPrime2(9);
console.log(res2);