import unsortedArrayGenerator from "../utils/unsortedArrayGenerator.js";

const arr = unsortedArrayGenerator(10, 10);
console.log(arr);

// Version plus générique de l'algorithme sans utiliser slice() //
// ici pour diviser le tableau on va utiliser des index //

function mergeArray(arr, left, mid, right) {
  // d'abord construire les sous tableaux //
  const leftArrayLength = mid - left + 1;
  const rightArrayLength = right - mid;
  const leftArray = [];
  const rightArray = [];

  // on remplie nos deux sous tableaux avec les bonnes valeurs

  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = arr[left + i];
  }

  for (let i = 0; i < rightArrayLength; i++) {
    rightArray[i] = arr[mid + i + 1];
  }

  // Fusion des sous tableaux
  let leftIndex = 0;
  let rightIndex = 0;
  let indexToFill = left;

  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      arr[indexToFill] = leftArray[leftIndex];
      leftIndex++;
    } else {
      arr[indexToFill] = rightArray[rightIndex];
      rightIndex++;
    }
    indexToFill++;
  }
  while (leftIndex < leftArrayLength) {
    arr[indexToFill] = leftArray[leftIndex];
    leftIndex++;
    indexToFill++;
  }
  while (rightIndex < rightArrayLength) {
    arr[indexToFill] = rightArray[rightIndex];
    rightIndex++;
    indexToFill++;
  }
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  // cas de base
  if (left >= right) {
    return null;
  } else {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    return mergeArray(arr, left, mid, right);
  }
}

mergeSort(arr);
console.log(arr);
