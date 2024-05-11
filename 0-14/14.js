"use strict";
//assiment#14
//q# no 14;Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them
//define arry of guest list to invited
let guestlist = ["rehan", "kamran", "imran"];
//invit each guest
guestlist.forEach(guest => {
    console.log(`Dear ${guest},you are cordillay invited to dinner`);
});
