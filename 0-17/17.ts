//assiment# 17
//q no#Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestLists: string[] = ["rehan","kamran","imran","samina"];
//print the name who cant make dinner//

let unableAttend:string = guestLists.splice(1,1)[0];

console.log(`${unableAttend}cant make dinner`);
//push
guestLists.push("samina");
console.log(guestLists)
 
//print a message to the guest
guestLists.forEach(guest =>{console.log(`${guest},you are cordlly invited`)}); 


guestLists.unshift("samina");

console.log("guestlist");
guestLists.splice(Math.floor(guestLists.length/2),0,"samina");
//push
guestLists.push("asad");
console.log("guestlist");
//foreach//

//guestLists.forEach(guest =>{console.log(` Dear,${guest},you  all are cordlly invited to  dinner`)});
//question #17

//print message



("unfortunately ! the new dinner table wont arrive so we can invite only 2guest");

guestLists.unshift("rida","hainya");
//print
console.log("updating guest list", guestLists);

//remove guest 
while(guestLists.length  > 2) {
    let removeGuest:string  | undefined =  guestLists.pop();
    if(removeGuest !== undefined) {console.log(`sorry,${removeGuest},we cant invite you`);}
    
}
///• Print a message to each of the two people still on your list, letting them know they’re still invited.
//
guestLists.forEach((guest) => { console.log(`Dear ${guest},you  are invited to dinner)`) });

//remove from guest list
guestLists.splice(0,  guestLists.length)


console.log("updated list of guests", guestLists);

//print updated guest list