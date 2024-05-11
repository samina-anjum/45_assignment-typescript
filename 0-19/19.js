"use strict";
//assiment#19
//question no:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//new
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
console.log("guestlist");
guestLists.splice(Math.floor(guestLists.length / 2), 0, "samina");
//push
guestLists.push("asad");
console.log("guestlist");
//foreach//
//guestLists.forEach(guest =>{console.log(` Dear,${guest},you  all are cordlly invited to  dinner`)});
//question #17
//print message
("unfortunately ! the new dinner table wont arrive so we can invite only 2guest");
guestLists.unshift("rida", "hainya");
//print
console.log("updating guest list", guestLists);
//remove guest 
while (guestLists.length > 2) {
    let removeGuest = guestLists.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry,${removeGuest},we cant invite you`);
    }
}
///• Print a message to each of the two people still on your list, letting them know they’re still invited.
//
guestLists.forEach((guest) => { console.log(`Dear ${guest},you  are invited to dinner)`); });
//remove from guest list
guestLists.splice(0, guestLists.length);
console.log("updated list of guests", guestLists);
//print updated guest list
