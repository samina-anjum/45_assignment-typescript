"use strict";
//#!/usr/bin/env
// import inquirer from "inquirer"
Object.defineProperty(exports, "__esModule", { value: true });
//q#24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you //want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Test for equality and inequality
console.log("Equality test with string:", "Apple" === "Apple");
//Test for equality and inequality
console.log("inequality test with string:", "Apple" != "orange");
//test using the lower case function
console.log("test using the lower case function", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality
console.log("equality test with number:", 26 === 26);
//inequality test with number:
console.log("inequality test with number:", 26 != 35);
//greater than less than
console.log("GREATER THAN TEST WITH number:", 10 > 5);
console.log("LESS THAN TEST WITH number:", 10 < 5);
//test using the upper case function
console.log("test using the upper case function", "HELLO".toUpperCase() === "HELLO");
//greater than or equal
console.log("greater than or equal to", 10 >= 10);
//less than or equal to
console.log("less than or equal to test", 5 <= 10);
//• Tests using "and"  operators
console.log("AND operator test:", 5 === 5 && 10 > 5);
//• Tests using "or" and "or" operators
console.log("AND operator test:", 5 === 5 || false);
//• Test whether an item is in a array
const fruits = ["gawa", "banana", "cherry"];
console.log('testings "cherry" is  in arry', fruits.includes('cherry'));
//Test whether an item is not in a array//
console.log('testings "Apple" is not in arry', fruits.includes('Apple'));
