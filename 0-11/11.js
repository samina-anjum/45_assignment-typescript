"use strict";
//ASSIMENT# 11
//Q# 11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Array
//define an arry of names
let names = ["sam", "kam", "fam", "jani",];
//loop
//for each
//for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for loop
for (const friends of names)
    console.log(friends);
