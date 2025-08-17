// Problem 1: Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let count = 0;
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming"));

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  const reversed = reverseString(str);
  return str === reversed;
}
console.log(isPalindrome("hello"));

// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 40]));

