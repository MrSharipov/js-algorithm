function fib (n) {
    const arr = [1,1]; // 1
    for(let i = 2; i < n + 1; i++){ // 1
        console.log('Running') // n - 1
        arr[i] = arr[i-2]+arr[i-1]; // n - 1
    }
    return arr[n]; // 1
}   
// T = 1+1+1+2*(n-1) = 3 + 2n - 2 = 1 + 2n = 2n = n
// => O(n) => Linear Time Complexity
const res = fib(4);
console.log(res);
