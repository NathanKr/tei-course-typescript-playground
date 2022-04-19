import {writePerson} from './utils'

// --- boolean , number , string 
let flag = true;
let num = 11;
let str = 'hello world !!';
let s = flag + num + str; // js problem
console.log(s);

// --- array
let fruits = ['apple' , 'melon' , 1]; // js problem
fruits.forEach(fruit => {
    console.log(fruit);
    console.log(`${fruit} , ${fruit.lngth}`);// js two problems
});


// --- object
let person = {firstName : 'Jim',lastName : 'Carter' , age : 33};
writePerson(person);// --- problem in writePerson , you will see this only on run time
