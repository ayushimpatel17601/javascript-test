//  primitive 
// 7 type : String,Number,Boolean,Null,undefind,Symbol,BigInt
const score = 100;
const scrovalue= 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const BigInt = 376652642378678n;

const id = Symbol("456");
const userId = Symbol("456");
console.log(id === userId); //false

// Refrence (Non-primitive)
// Array , Object , functions

const heros = ["shaktiman","naagraj","doga"];
let myobj = {
    name : "john",
    age : 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof heros);
console.log(typeof BigInt);

// https://262.ecma-international.org/5.1/#sec-11.4.3