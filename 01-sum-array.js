// Time complexity: O(n)
function sumArr (arr) {
    return arr.reduce((acc, val)=>{
        return acc += val
    }, 0);
}

const res = sumArr([1,3,10]);
console.log(res);
