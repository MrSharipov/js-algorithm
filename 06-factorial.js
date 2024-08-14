function fact(number) {
    let res = number;
    for(let i = number - 1; i > 0; i--) {
        res *= i;
    }
    console.log(res);
}

// O(n)

fact(3)
fact(4)
fact(5)