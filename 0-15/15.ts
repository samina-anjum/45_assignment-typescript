//assiment# 15
//q# 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestLists:string[] = ["rehan","kamran","imran","samina"];
//print the name who cant make dinner//

let unableAttend:string = guestLists.splice(1,1)[0];

console.log(`${unableAttend}cant make dinner`);
//push
guestLists.push("samina");
console.log(guestLists)
 
//print a message to the guest
guestLists.forEach(guest =>{console.log(`${guest},you are cordlly invited`)}); 
