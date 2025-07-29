// let number = 7393939393;
// let pattern = /^[6-9]\d{9}$/;

// if (pattern.test(number.toString())) {
//   console.log("correct");
// } else {
//   console.log("wrong pattern");
// }

// let text="hai hello how are you";
// let match=/\b\w+\b/gi;


// console.log(match ? text : 0)
// console.log(text.length);

const text = "hello! how are you";
const words=text.match(/\b\w+\b/g);
console.log(words);