import unsortedArrayGenerator from "../utils/unsortedArrayGenerator.js";

const arr = unsortedArrayGenerator(10, 10);
console.log(arr);

function mergeArray(leftArray, rightArray) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    sortedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    sortedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return sortedArray;
}

function mergeSort(arr) {
  // cas de base
  if (arr.length < 2) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return mergeArray(mergeSort(left), mergeSort(right));
  }
}

const sortedArr = mergeSort(arr);
console.log(sortedArr);
