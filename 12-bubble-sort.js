function bubbleSort(arr) {
  const resultArr = [...arr];

  for (let outer = 0; outer < resultArr.length; outer++) {
    let outerEl = resultArr[outer];
    console.log('Outer Loop', outerEl);
    
    for (let inner = outer + 1; inner < resultArr.length; inner++) {
      let innerEl = resultArr[inner];
        console.log('Inner Loop');
        console.log('outerEl: ' + outerEl);
        console.log('innerEl: ' + innerEl);
        
        
      if(outerEl > innerEl) {    
        resultArr[outer] = innerEl;
        resultArr[inner] = outerEl;

        outerEl = resultArr[outer];
        innerEl = resultArr[inner];

        console.log('Inside IF');
        console.log(resultArr);
      }
      console.log('End of inner loop');
      console.log(resultArr);  
    }
  }
  return resultArr;
}

// Time complexity: Worst and Avg case =>  O(n^2) 
const res = bubbleSort([5, 10, -3]); 
// Time complexity: Best case =>  O(n) => (Already sorted arr)
const res2 = bubbleSort([-3, 5, 10,]);  
console.log(res);
