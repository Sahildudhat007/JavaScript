// Array 

// Syntax :-

// const array_Name = [item1, item2, ...];

// const arr = [1, 2, 3, 4, 'hello', true, false]
// console.log(arr);
// console.log(arr[4]);

// Array length :-

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.length);

// Array Push :- // Add Last

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.push(7, 8, 9)
// console.log(arr);

// Array Pop :-  // Remove Last

// const arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// console.log(arr);

// Array Shift :- // Remove First

// const arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr);

// Array Unshift :- // Add First

// const arr = [1, 2, 3, 4, 5];
// arr.unshift(3);
// console.log(arr);

// Array Changing Elements :-

// const arr = [1, 2, 3, 4, 5];
// arr[2] = 10;
// arr[6] = 10;
// console.log(arr);

// Array Merging(Concatenating) :-

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.concat([11, 22, 33], ['Hii', 'Hello']));

// const arr = [1, 2, 3];
// const arr2 = [11, 22, 33];
// const arr3 = [11, 12, 13];
// const merging = arr.concat(arr2, arr3);
// console.log(merging);

// Array Splice() :-

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(2, 0, 'Hello', 'Hii'); //(2) defines the position, (0) defines how many elements should be removed
// // arr.splice(2, 3, 'Hello', 'Hii');
// arr.splice(0, 1);
// console.log(arr);

// Array Slice() :-

// const arr = [1,2,3,4,5,6];
// const removed = arr.slice(1);
// // const removed = arr.slice(2,5);
// console.log(removed);

// Array Sort() :-

// const arr = [40, 100, 1, 5, 25, 10];

// arr.sort(function (a, b) {
//     return a - b;
// });
// console.log(arr);

// Array Reverse() :-

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// Array Max() :-

// const arr = [20, 10, 30, 4, 7, 22];
// console.log(Math.max.apply(null,arr));

// Array Min() :-

// const arr = [20, 10, 30, 4, 7, 22];
// console.log(Math.min.apply(null,arr));

// Array every():-

// let data = [22, 45, 2, 30, 6, 10, 20];
// let result = data.every((val, index) => {
//     return val > 10;
// })
// console.log(result);

// Array some():-

// let data = [22, 45, 2, 30, 6, 10, 20];
// let result = data.some((val, index) => {
//     return val > 20;
// })
// console.log(result);

// Array find():-

// let data = [22, 45, 2, 30, 6, 10, 20];
// let result = data.some((val, index) => {
//     return val > 20;
// })
// console.log(result);

// Array filter():-

// let data = [22, 45, 2, 30, 6, 10, 20];
// let result = data.filter((val, index) => {
//     return val > 20;
// })
// console.log(result);

// Array findIndex():-

// let data = [22, 45, 2, 30, 6, 10, 20];
// let result = data.findIndex((val, index) => {
//     return val > 40;
// })
// console.log(result);