// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

let x = 15438;
let Reverse = x.toString().split('').reverse().join('');
console.log(Number(Reverse));