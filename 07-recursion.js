function fact(number) {
  if (number === 1) {
    return 1
  }
  return number * fact(number - 1)
}

// O(n)

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

