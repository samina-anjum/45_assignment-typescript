import inquirer from "inquirer";
import chalk from "chalk";

//questions no:23Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//....................................test #1..................
let car :string = 'subaru';

console.log("Is car === 'subaru'? I predict True.");

console.log(car === 'subaru');
//....................................test 2.....................


console.log("Is car == 'subaru'? I predict True.");

console.log(car == 'subaru');

//......................................test 3...........................


console.log("Is car!= 'HONDA'? I predict True.");

console.log(car != 'HONDA');
//...........................................test4........

console.log("Is car!== 'FORD'? I predict True.");

console.log(car !== 'FORD');
//...........................................test5........

console.log("Is car.uppercase== 'SUBARU'? I predict True.");

console.log(car.toUpperCase() == 'FUBARU');
//..........................................test6........

console.log("Is car.lower case== 'SUBARU'? I predict false.");

console.log(car.toLowerCase() == 'FUBARU');

//..........................................test7........
console.log("Is car=== 'SUBARU'? I predict false.");

console.log(car === 'FUBARU');
//..........................................test8........
console.log("Is car== 'CYCLE'? I predict false.");

console.log(car == 'CYCLE');
//..........................................test9........
console.log("Is car== 'train'? I predict false.");

console.log(car == 'train');
///.........................................test10........
console.log("Is car== 'tBUS'? I predict false.");

console.log(car == 'BUS');
















