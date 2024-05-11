//ASSIMENT#12

///Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name./      ASSIMENT
//
let names: string[] = [ "sam","kam","fam","jani",]; 

//loop
//for each
//for loop


 for(let i = 0; i < names.length; i++)
    {
        console.log(`hello,${names[i]}!how are you today ?` );
    } 


//for each

names.forEach((friends) =>{ console.log( `hi,${friends}!how are you today ?` )}

    


//for loop

 for(const friends of names)
    console.log( `hi,${friends}!how are you today ?` );


//the below code fragment can be found in:
for (let friendNames of names)
    { console.log(`Dear,$ {friendNames}` ) ; }
