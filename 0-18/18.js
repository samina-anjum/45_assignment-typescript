"use strict";
//assiment
//questions #18
//eeing the World: Think of at least five places in the world you’d like to visit.
let placesToVisit = ["parise", "new york", " rome", " italy", "china"];
//print orgenal order
console.log("original order", placesToVisit);
//Print your array in alphabetical order without modifying the actual list.
placesToVisit.sort();
console.log("alphabetical order", placesToVisit.slice().sort());
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("original order", placesToVisit);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
//• Reverse the order of your list. Print the array to show that its order has changed
console.log("reverse order ,changed");
placesToVisit.reverse();
console.log("placesToVisit");
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//
console.log("original order", placesToVisit.slice().sort());
console.log("placesToVisit");
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
//
console.log(" reverse alphabetical order changed", placesToVisit.sort().reverse());
console.log("placesToVisit");
