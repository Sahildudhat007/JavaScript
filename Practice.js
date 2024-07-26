// (10 > 2 > 3)
// console.log(10 > 2 > 3);

// console.log((10 > 2) && (2 > 3));

// const text = [ "sahil", "akshay", "abc" , "jayan"];
// text.sort();
// console.log(text);

// const number = [20, 3, 5, 10, 8, 2, 1];
// number.sort(function (a, b) {
//     return a - b;
// })
// console.log(number);

// const text = [ "sahil", "akshay", "abc" , "jayan"];
// text.reverse();
// console.log(text);

// const text1 = 'sahil';
// const rev = text1.split('').reverse().join('');
// console.log(rev);

// const age = [ 20, 11, 17, 18, 40];
// const age18 = age.filter(myFunction);

// function myFunction (val, ind, arr) {
//     return val >= 18;
// }

// console.log(age18)

// const age = [ 20, 11, 17, 18, 40];
// const age18 = age.find(myFunction);

// function myFunction (val, ind, arr) {
//     return val >= 18
// }

// console.log(age18);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);

// const age = [ 20, 11, 17, 18, 40];

// function myFunction (totle, val, ind, arr) {
//     return totle + val
// }

// const sum = age.reduce(myFunction);
// console.log(sum)

// const fname = "sahil";
// const lname = "dudhat";
// const sum = fname.concat(lname);
// console.log(sum);
// const fullname = [...fname, ...lname].join('');
// console.log(fullname)

// const arr1 = [1, 3, 5];
// const arr2 = [2, 3, 8];
// const sum = arr1.concat(arr2);
// console.log(sum);
// const sum1 = [...arr1, ...arr2];
// console.log(sum1);

// let a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;
// console.log("a =", a);
// console.log("b =", b);

// let a = 10;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a :",a);
// console.log("b :",b);



// Array :- 

// syntax :- const array_name = [item1, item2, ...];

// Array length :-
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);

// const cars = ["BMW", "Volvo", "Mustang"]
// let length = cars.length;
// console.log(length);

// Array Push :-
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Mango");
// console.log(fruits)

// const cars = ["BMW", "Volvo"];
// cars.push("Mustang");
// console.log(cars);

// Array Pop :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// const cars = ["BMB", "Volvo", "Mustang"];
// cars.pop();
// console.log(cars);

// Array Shift :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// const cars = ["BMB", "Volvo", "Mustang"];
// cars.shift();
// console.log(cars);

// Array unShift :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);

// const cars = ["Volvo", "Mustang"];
// cars.unshift("BMW");
// console.log(cars);

// Array Changing Elements :-
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "kiwi";
// console.log(fruits);

// const cars = ["Volvo", "Mustang"];
// cars[0] = "BMW";
// console.log(cars);

// Array Merging(Concatenating) :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const cars = ["BMW", "Volvo", "Mustang"];
// const newarray = fruits.concat(cars);
// console.log(newarray);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const newarray = arr1.concat(arr2, arr3);
// console.log(newarray);

// const arr1 = ["Emil", "Tobias", "Linus"];
// const newarray = arr1.concat("Peter");
// console.log(newarray);

// Array Splice() :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits);

// Array Slice() :- 
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let newfruits = fruits.slice(1)
// console.log(newfruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let newfruits = fruits.slice(1, 3);
// console.log(newfruits);

// Array Sort() :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort()
// console.log(fruits);

// Numeric Sort :- 
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return a - b;
// })
// console.log(points);

// Array Reverse() :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort().reverse();
// console.log(fruits);

// Array Max() :- 
// const array1 = [40, 100, 1, 5, 25, 10];
// console.log(Math.max(...array1));

// Array Min() :- 
// const array1 = [40, 100, 1, -5, 25, 10];
// console.log(Math.min(...array1));

// Array forEach() :- 
// let sum = 0;
// const num = [65, 44, 12, 4];
// num.forEach(myFunction);
// console.log(sum);

// function myFunction(item){
//     sum += item;
// }

// let sum = 0;
// const num = [60, 40, 10, 4];

// num.forEach(myFunction);
// console.log(sum);

// function myFunction (item) {
//     sum += item;
// }

// Array map() :- 
// const num1 = [45, 4, 9, 16, 25];
// const num2 = num1.map(myFunction);
// console.log(num2);

// function myFunction (val, ind, arr){
//     return val * 2;
// }

// const num1 = [60, 20, 50, 5, 2];

// function myFunction(val, ind, arr) {
//     return val + 2;
// }

// const num2 = num1.map(myFunction);
// console.log(num2);

// Array filter() :- 
// const num1 = [45, 4, 9, 16, 25];
// const num2 = num1.filter(myFunction);
// console.log(num2);

// function myFunction (val, ind, arr) {
//     return val > 18;
// }

// const num1 = [100, 2, 40, 29, 4];

// function myFunction (val, ind, arr) {
//     return val > 18;
// }

// const num2 = num1.filter(myFunction);
// console.log(num2);

// Array reduce() :- 
// const num1 = [ 45 , 4 , 9 , 16 , 25 ];

// function myFunction (totle, val, ind, arr) {
//     return totle + val;
// }

// const num2 = num1.reduce(myFunction);
// console.log(num2);

// Array reduceRight() :- 
// const num1 = [45, 4, 9, 16, 25];

// function myFunction(totle, val, ind, arr) {
//     return totle + val;
// }

// const num2 = num1.reduceRight(myFunction);
// console.log(num2);

// Array every() :- 
// const num1 = [45, 4, 9, 16, 25];

// function myFunction (val, ind, arr) {
//     return val > 18;
// }

// const num2 = num1.every(myFunction);
// console.log(num2);

// Array some() :- 
// const num1 = [45, 4, 9, 16, 25];

// function myFunction (val, ind, arr) {
//     return val > 18;
// }

// const num2 = num1.some(myFunction);
// console.log(num2);

// Array find() :- 
// const num1 = [4, 9, 16, 25, 29];

// function myFunction (val, ind, arr) {
//     return val > 18;
// }

// const num2 = num1.find(myFunction);
// console.log(num2)

// Array findIndex() :- 
// const num1 = [4 , 9 , 16 , 25 , 29];

// function myFunction (val, ind, arr) {
//     return val > 18;
// }

// const num2 = num1.findIndex(myFunction);
// console.log(num2);

// Array entries() :- 
// const arr1 = [ 'a' , 'b' , 'c' ];
// const iterator1 = arr1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const iterator = fruits.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// Array includes() :- 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");
// console.log(fruits)


// String :- 

// syntaxt :- 
// let a = "Hello World"; 
// console.log(a);

// let b = 'Hello World';
// console.log(b);

// let ans = "Hello 'World'";
// let ans = 'Hello "World"';
// let ans = "Hello' World";
// console.log(ans);

// String Length :- 
// let text = "Hello World";
// let lenght = text.length;
// console.log(lenght);

// let text = "Sahil Dudhat";
// let lenght = text.length;
// console.log(lenght)

// String Slice() :- 
// let text = "Apple, Banana, Kiwi";
// let lenght = text.slice(6, 13);
// console.log(lenght);

// let text = "Apple, Banana, Kiwi";
// let lenght = text.slice(7);
// console.log(lenght);

// let text = "Apple, Banana, Kiwi";
// let lenght = text.slice(-6);
// console.log(lenght);

// let text = "Apple, Banana, Kiwi";
// let lenght = text.slice(-12, -6);
// console.log(lenght);

// String substring :- 
// let text = "Apple, Mango, Kiwi";
// let lenght = text.substring(7, 19);
// console.log(lenght);

// String substr() :- 
// let text = "Apple, Mango, Kiwi";
// let lenght = text.substr(7, 5);
// console.log(lenght);

// let text = "Apple, Mango, Kiwi";
// let lenght = text.substr(7);
// console.log(lenght);

// let text = "Apple, Mango, Kiwi";
// let lenght = text.substr(-4);
// console.log(lenght);

// String replace() :- 
// let text = "Please visit Microsoft!";
// let lenght = text.replace("Microsoft", "Google");
// console.log(lenght);

// String replaceAll() :- 
// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// let lenght = text.replaceAll("cats", "dog");
// let lenght = text.replaceAll("Cats", "Dog");
// console.log(lenght);

// String toUpperCase() :- 
// let text = "Hello World"
// let lenght = text.toUpperCase();
// console.log(lenght);

// String toLowerCase() :- 
// let text = "Hello World"
// let lenght = text.toLowerCase();
// console.log(lenght);

// String concat() :- 
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// String trim() :- 
// let text = "     Hello World     ";
// let lenght = text.trim();
// console.log(lenght);

// String trimStart() :- 
// let text = "     Hello World     ";
// let lenght = text.trimStart();
// console.log(lenght);

// String trimEnd() :- 
// let text = "     Hello World     ";
// let lenght = text.trimEnd();
// console.log(lenght);

// String padStart() :- 
// let text = "5";
// let lenght = text.padStart(4, "0");
// console.log(lenght);

// String padEnd() :- 
// let text = "5";
// let lenght = text.padEnd(4, "0");
// console.log(lenght);

// String charAt() :- 
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char)

// String charCodeAt() :- 
// let text = "HELLO WORLD";
// let char = text.charCodeAt(1);
// console.log(char);

// String split() :- 
// let text = "HELLO WORLD" ;
// let char = text.split(",");
// let char = text.split(" ");
// let char = text.split("|");
// console.log(char);


// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//         Maximum element is: 9

// const mini = [3, 5, 4, 1, 9];
// console.log("Minimum element is : " + Math.min(...mini));

// const maxi = [3, 5, 4, 1, 9];
// console.log("Maximum element is : " + Math.max(...maxi))

// function setMini(A) {
//     let mini = Infinity;
//     for (let i = 0; i < A.length; i++ ){
//         if(A[i] < mini){
//             mini = A[i];
//         }
//     }
//     return mini;
// }

// function setMaxi(A) {
//     let maxi = -Infinity;
//     for(let i = 0; i < A.length; i++){
//         if(A[i] > maxi){
//             maxi = A[i];
//         }
//     }
//     return maxi;
// }

// function main() {
//     const A = [3, 5, 4, 1, 9];
//     console.log("Minimum element is : " + setMini(A));
//     console.log("Maximum element is : " + setMaxi(A));
// }
// main()

// Input: original_array[] = {1, 2, 3}  ->  Output: array_reversed[] = {3, 2, 1}
// Input: original_array[] = {4, 5, 1, 2}  ->  Output: array_reversed[] = {2, 1, 5, 4}

// const original_array = [1, 2, 3];
// const original_array1 = [4, 5, 1, 2]
// original_array.reverse();
// original_array1.reverse();
// console.log("array_reversed : " + original_array);
// console.log("array_reversed : " + original_array1);

// Example 1:-
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// let maxSubArray = function(nums){
//     let maxSum = nums[0];
//     let currentSum = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i]);
//         if (currentSum > maxSum) {
//             maxSum = currentSum;
//         }
//     }
//     return maxSum;
// };

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// const nums = [1]
// const nums = [5, 4, -1, 7, 8]
// const result = maxSubArray(nums);
// console.log(result)

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function twoSum(nums, target) {
//     const map = new Map();

//     for(let i = 0; i < nums.length; i++){
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return[map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// };
// const nums = [3, 3];
// const target = 6;
// const nums = [3, 2, 4];
// const target = 6;
// const nums = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(nums, target);
// console.log(result)

// const number = prompt('Enter the Number : ');
// const result = Math.sqrt(number);
// console.log(result);

// const number1 = 2.25;
// const number2 = -4;
// const number3 = 'hello';
// const result1 = Math.sqrt(number1);
// const result2 = Math.sqrt(number2);
// const result3 = Math.sqrt(number3);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// const Maths = 50, sci = 60, eng = 70;
// const totle = Maths + sci + eng;
// const result = totle / 3;
// console.log(result);

// const doller = 3;
// const rupees = doller * 72;
// console.log(rupees);

// const feet = 3;
// const inches = feet * 12;
// console.log(inches);

// const inch = 20;
// const cm = inch * 2.54;
// console.log(cm)

// const celsius = 1;
// const fahrenheit = (celsius * 9/5) + 32;
// console.log(fahrenheit);

// const a = prompt("Enter the First number : ");
// const b = prompt("Enter the second number : ");
// const c = a + b;
// console.log("a + b = " + c);

// const doller = prompt("Enter the Doller : ");
// const rupees = doller * 83.65;
// console.log(rupees);

// const a = prompt("Enter the First number : ");
// const b = prompt("Enter the second number : ");
// if (a < b) {
//     console.log("a is smallest number");
// } else {
//     console.log("b is smallest number");
// }

// const a = prompt("Enter the Number : ");
// if (a > 0) {
//     console.log("Positive Number");
// } else {
//     console.log("Nagative Number");
// }

// const a = prompt("Enter the Number : ");
// if (a % 5 == 0) {
//     console.log("Divisible by 5")
// } else {
//     console.log("Not Divisible by 5");
// }

// const a = prompt("Enter the Number : ");
// if (a % 15 == 0) {
//     console.log("Divesible by 15");
// } else {
//     console.log("Not Divisible by 15");
// }

// const a = prompt("Enter the Student Marks : ");
// if (a >= 33) {
//     console.log("Student is Pass");
// } else {
//     console.log("Student is Fail");
// }

// const a = prompt("Enter the number : ");
// if (a % 4 == 0) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }

// const a = 100;
// const b = 2;
// const c = 3;
// if (a > b && a > c) {
//     console.log("largest number is a");
// } else {
//     if (b > c) {
//         console.log("largest number is b");
//     } else {
//         console.log("largest number is c");
//     }
// }

// const a = prompt("Enter the age : ");
// if (a > 18) {
//     console.log("a is eligible for voting");
// } else {
//     console.log("a is not eligible for voting");
// }

// const eng = prompt("Enter the English marks : ");
// const guj = prompt("Enter the Gujarati marks : ");
// const maths = prompt("Enter the Maths marks : ");
// const sci = prompt("Enter the Science marks : ");
// const com = prompt("Enter the Computer marks : ");
// const totle = eng + guj + maths + sci + com;
// const per = totle/5;
// if (per >= 75) {
//     console.log("Grade A");
// }
// else if (per < 75 && per > 60){
//     console.log("Grade B");
// }
// else if (per < 60 && per > 45){
//     console.log("Grade C");
// }
// else if (per < 45 && per > 35){
//     console.log("Grade D");
// }
// else if (per < 35){
//     console.log("Grade E");
// }

// let age =  20;
// console.log((age >= 18) ? "You can voting" : "You can't voting");

// let num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++
// }

// let num = 5
// do {
//     console.log(num);
//     num++
// } while (num <= 10);

let area = "circle";
let PI = 3.14, l = 5, b = 4, r = 3;
if (area == "circle") {
    console.log("the area of circle is : " + PI*r*2);
}else if (area == "triangle") {
    console.log("the area of triangle is : " + (l*b)/2);
}else if (area == "rectangle") {
    console.log("the area of rectangle is : " + (l*b));
}else{
    console.log("please enter valid data");
}