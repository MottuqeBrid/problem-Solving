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
