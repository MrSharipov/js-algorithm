/*
    In the dynamic programing, we will save calculation results
    in order not to repeat same calculation again. It 
    is called memoization
*/
function fib(n, memo) {
  let result
  if (memo[n]) {
    return memo[n]
  }
  if (n === 0 || n === 1) {
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  memo[n] = result
  return result
}

// Time complexity: O(n)

console.log(fib(5, {}))
console.log(fib(10, {}))
