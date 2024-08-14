// Time complexity: O(n)
function sumArr (arr) {
    /* First way but same */
    let result = 0;            // 1
    for(const num of arr) {    // 1
        result += num;         // n
    }
    return result;             // 1
/*
    T = 1 + 1 + 1 + n = 3 + 1*n
    T = 1*n
    T = n
    T = n => O(n) => Linear Time Complexity
*/


    /* Second way but same */
    // return arr.reduce((acc, val)=>{
    //     return acc += val
    // }, 0);
}

const res = sumArr([1,3,10]);
console.log(res);
