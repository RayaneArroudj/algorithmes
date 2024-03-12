function isPalindrome(str, start, end) {
  // cas de base
  if (start >= end) {
    return true;
  } else {
    if (str[start] === str[end]) {
      return isPalindrome(str, start + 1, end - 1);
    }
    return false;
  }
}

const test1 = "kayak";
const test2 = "test";

console.log(isPalindrome(test1, 0, 4));
console.log(isPalindrome(test2, 0, 3));
