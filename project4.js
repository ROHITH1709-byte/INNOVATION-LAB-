project 4
// 1. Reverse words in sentence
let sentence = "Hello world from JavaScript";
let reversed = sentence.split(" ").reverse().join(" ");
console.log("Reversed Sentence:", reversed);

// 2. Remove duplicates from array
let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(nums)];
console.log("Unique Numbers:", unique);

// 3. Count vowels in a string
let str = "JavaScript is amazing!";
let vowels = str.match(/[aeiou]/gi);
console.log("Vowel Count:", vowels ? vowels.length : 0);
