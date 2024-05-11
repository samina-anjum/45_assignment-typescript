//q#44

import { log } from "console";

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwichandwiches( items :String[]) {
    console.log("/n making your sandwich with:");
    

items.forEach(Element=>console.log("-" + Element));
console.log(" enoje your sandwich!/n");



}

makesandwichandwiches(["bread", "cheez", "petti"]);
makesandwichandwiches(["turky", "bakon ",]);
makesandwichandwiches(["peanut", " butter", "jelly"]);