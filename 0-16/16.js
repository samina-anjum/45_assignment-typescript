"use strict";
//Assiment# 16
//q no# 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.:
console.log("great news! we found bigger table");
//add something  in arry bigning
//unshift methods
//let fruits:string[]= ["apple", "orange","banana "];
//fruits.unshift("mango");
//console.log(fruits);
//unshift
let guestLists = ["rehan", "kamran", "imran", "samina"];
//print the name who cant make dinner//
let unableAttend = guestLists.splice(1, 1)[0];
console.log(`${unableAttend}cant make dinner`);
//push
guestLists.push("samina");
console.log(guestLists);
//print a message to the guest
guestLists.forEach(guest => { console.log(`${guest},you are cordlly invited`); });
guestLists.unshift("samina");
//console.log("guestlist");
guestLists.splice(Math.floor(guestLists.length / 2), 0, "samina");
//push
guestLists.push("asad");
console.log("guestlist");
//foreach//
guestLists.forEach(guest => { console.log(` Dear,${guest},you  all are cordlly invited to  dinner`); });
