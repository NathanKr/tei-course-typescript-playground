import { writePerson } from "./utils";

// --- inferred types : boolean , number , string 
let flag = true;
let num = 11;
let str = 'hello world !!';
// let s = flag + num + str; // problem adding boolean to string
let s = num + str; // problem fixed
console.log(s);

// js code with two problem
// let fruits = ['apple' , 'melon' , 1]; // js problem
// fruits.forEach(fruit => {
//     console.log(fruit);
//     console.log(`${fruit} , ${fruit.lngth}`);// js two problems
// });

let fruits = ['apple' , 'melon' , "1"]; // problem fixed via static type check
fruits.forEach(fruit => {
    console.log(fruit);
    console.log(`${fruit} , ${fruit.length}`);// js two problems
});


// --- object
let person = {firstName : 'Jim',lastName : 'Carter' , age : 33};
writePerson(person);// --- Quick fix - auto import


export {} // must because no import and export so problematic under --isolatedModules