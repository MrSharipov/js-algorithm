function quickSort(arr) {
  const copiedArr = [...arr];
  console.log("FUNCTION STARTTING...");
  console.log(arr);

  if (copiedArr.length <= 1) {
    console.log("ONLY ONE ITEM - RETURNING");
    console.log(copiedArr);
    return copiedArr;
  }
  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArr.shift(); // removes the first el in the copiedArr and assign its value to variable
  const centerElementsArray = [pivotElement];

  while (copiedArr.length) {
    const currentElement = copiedArr.shift();
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  console.log("AFTER WHILE LOOP...");
  console.log(smallerElementsArray);
  console.log(centerElementsArray);
  console.log(biggerElementsArray);

  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
}

// Time complexity: O(n*log n)

// const sortedArr = quickSort([-3, 10, 1, 100, -10, 22, -3, 15]);
const sortedArr = quickSort([-3, 10, 100, -3, -15]);
console.log(sortedArr);
