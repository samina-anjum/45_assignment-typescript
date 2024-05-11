"use strict";
//q# 33Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal end
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let num of numbers) {
    let oridinalEnding;
    if (num === 1) {
        oridinalEnding = "st";
    }
    else if (num === 2) {
        oridinalEnding = "nd";
    }
    else if (num === 3) {
        oridinalEnding = "rd";
    }
    // else (num===4)
    console.log(`${num}${"oridinalEnding"}`);
}
//     {oridinalEnding = "th";}
// else if (num===5)
//     {oridinalEnding = "nd";}
// else if (num===6)
//     {oridinalEnding = "nth";}
// else if (num===7)
//     {oridinalEnding = "th";}
// else if (num===8)
//     {oridinalEnding = "th";}
// else if (num===9)
//     {oridinalEnding = "th";}
