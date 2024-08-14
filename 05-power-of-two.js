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

console.log(isPowerOfTwo2(11));
console.log(isPowerOfTwo2(8));
console.log(isPowerOfTwo2(16));

