// import sum from './utils' // error ??
import {sum} from './utils'

// --- no args
console.log(sum()); // error 1

console.log(sum(1)); // error 2

console.log(sum(1,"hello")); // error 3

console.log(sum(1,2,3)); // error 4

// -- remark return in sum and call
console.log(sum(1,2)); // error 5

