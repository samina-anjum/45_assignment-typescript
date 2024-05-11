//q #31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usersNames: string[] = ['admin','rehan','kamran,samina','asad'];
if (usersNames.length===0) {
    console.log(' We need to find some users!');
    
}
else {
    usersNames=[];
    console.log('all users names have been removed'+usersNames.length);
    
}