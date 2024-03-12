function reverseArray(arr, start, end) {
  if (start < end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    reverseArray(arr, start + 1, end - 1);
  }
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

reverseArray(test, 0, test.length - 1);
console.log(test);
