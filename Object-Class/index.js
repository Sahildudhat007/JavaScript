// Object and Class

// Object :-

// let person = {
//     firstname:"Sahil",
//     lastname:"Dudhat",
//     age:20,
//     email:"sahil@gmail.com"
// };
// console.log(person);

// Dot Notation
// console.log(person.age);

// ["key"]
// console.log(person["lastname"]);

// Add Property
// person.gender= "male";
// person.address = {
//     add:"A-193,Tirupati Society",
//     city:"Surat",
//     State:"Gujrat"
// }
// person.hobbies=['playing','reading','Traveling']
// console.log(person.email);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.hobbies[2]);
// console.log(person.hobbies);

// Delet Property

// delete person.age;
// console.log(person);

// Class :-

// class person {
//     constructor(name) {
//         this.name = name;
//     }
//     dispay = function () {
//         return "Hello " + this.name;
//     }
// };

// let obj = new person('sahil');

// console.log(obj);
// console.log(obj.name);
// console.log(obj.dispay);
// console.log(obj.dispay());

// CallMethod :-

// let person = {
//     print: function(city){
//         return this.name + " " + this.surname + city;
//     }
// };

// let add = {
//     name:"Sahil",
//     surname:"Dudhat"
// }

// console.log(person.print.call(add, " surat"));

// Apply Method

// let person = {
//     print: function(city){
//         return this.name + " " + this.surname + "is live in " + city;
//     }
// };

// let add = {
//     name:"Sahil",
//     surname:"Dudhat"
// }
// console.log(person.print.apply(add,['surat']));
    
// Bind Method

let person = {
    name : "Sahil",
    surname : "Dudhat",
    print: function(){
        return this.name + " " + this.surname;
    }
};

let add = {
    name : "virat",
    surname:"kohli"
}

console.log(person.print());
console.log(person.print.bind(add)());