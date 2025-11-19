// Primitive datatypes

// Types of Primitive datatypes: String, Number, Boolean, null, undefined, Symbol, BigInt.

let name = 'Huzaifa';
let age = 21;
let status = true;
let weakness = null;
let partner;

let id = Symbol('7094');
let anotherId = Symbol('7094');
// console.log(id === anotherId);
// console.log(typeof anotherId);
// console.log(typeof id);

let bankBalance = 300000000000000000000000n
// console.log(bankBalance);
// console.log(typeof bankBalance);


// Refrence (Non Primitive datatypes)

// Types of Refrence (Non Primitive datatypes): Array, Object, Functions.

let array = ["Huzaifa", "Muhammad", "Hanzala", "Moavia"];
// console.log(array);
// console.log(typeof array);

let object ={
    name:"huzaifa",
    age:21
}
// console.log(object.name);
// console.log(typeof object);

let myFunction = function (){
    console.log("Hello World");
}

// console.log(myFunction);
// console.log(myFunction());
console.log(typeof myFunction);
// console.log(typeof myFunction());