// Function :- perform to specific task

/* defination :- 

function functionName(parameters) {
    //code to be executed 
}

*/

// {
//     function add(a, b) {
//         console.log(a + b);
//         console.log(a * b);
//     }
//     add('2', 3)  // ( function call )
//     add(10, "3")
// }

// basic function :- 

// {
//     function add(a, b) {
//         return a + b;
//     }
//     // console.log(add(10,20));
//     let c = add(10, 20);
//     console.log(c);
// }

// anonymous function :- 

// {
//     let product = function (x, y) {
//         return x + y;
//     }
//     console.log(product(10, 20))
// }

// {
//     let x = function (x, y) {
//         return x * y;
//     }
//     console.log(x(5, 2));
// }

// IIFE :- Immediately Invoked Function Expression

// {
//     let x = (function hello (a,b){
//         return(a-b);
//     })("10", 15);
//     console.log(x);
// }

// {
//     (function hello (){
//         console.log("Hello Wolrd");
//     })();
// }

// {
//     square('5', '3');  // hoisting
//     function square(a, b) {
//     console.log(a * b);
//     }
//     square(5, 3); // function call
// }

// Basic Function :-

// {
//     function add(a, b) {
//     return a * b;
//     }
//     // console.log(add(12,2));

//     let c = add(10, 20);
//     console.log(c);
// }

// Anoymous Function / function as expression :-

// {
//     let a = function (x, y) {
//     return x + y;
//     }
//     console.log(a(10, 2));
// }

// {
//     let b = function (x, y) {
//     return x * y;
//     }
//     console.log(b(10, 2));
// }

// IIFE :-

// {
//     let x = (function hello(a, b) {
//         return (a - b);
//     })('10', 15);
//     console.log(x);
// }

// {
//     (function hello(){
//         console.log("hello wolrd");
//     })();
// }

// Arrow Function :- 

// {
//     function add(a, b) {
//     return a + b;
//     }
//     console.log(add(10, 2));
// }

// {
//     let add = (a, b) => {
//     return (a + b);
//     }
//     console.log(add(12, 65));
// }

// {
//     let add = (a, b) => a + b;
//     console.log(add(12, 65));
// }

// Function Constructor :- 

// {
//     let a = new Function("a", "b", "return a*b");
//     console.log(a(12, 5));
// }

// Function are Object :-

// {
//     function add(a, b) {
//         return arguments.length;
//     }
//     console.log(add(4, 3));
//     console.log(add(4, 3, 5));
// }

// {
//     function multiplication(a, b) {
//         return a*b;
//     }
//     console.log(multiplication(4, 5).toString());
//     console.log(multiplication(4, 5));
    
// }

// Function Rest Parameters :-

// {
//     function sum(...args) {
//         let sum = 0;
//         for(let arg of args)
//         sum += arg;
//     return sum;
//     }
//     // let a = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// }

// Generator Function :-

// {
//     function* Generate() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
//     let Generator = Generate();
//     console.log(Generator.next().value);
//     console.log(Generator.next().value);
//     console.log(Generator.next().value);
//     // console.log(Generator.next().value);
// }

// this Keyword :-

// {
//     const detail = {
//         firstName: "Sahil",
//         lastName: "Dudhat",
//         id: 1234,
//         fullName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     }
//     console.log(detail.fullName());
// }