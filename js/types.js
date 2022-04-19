import {writePerson} from './utils'

console.log("types");

// --- boolean , number , string

let flag = true;
let num = 11;
let str = "Hello World";
// let s = glag + num + str;
let s = flag + num + str;
console.log(s);

// --- array
let fruits = ["melon", "grapes", 1];

fruits.forEach((fruit) => {
  console.log(fruit.length);
});

// --- object
let person = { firstName: "Jim", lastName: "Carter", age: 33 };
writePerson(person);