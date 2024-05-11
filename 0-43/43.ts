// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician:string[] = ['harrry','potter','heriom','ron','albs'];


function copyArray(arr:string[]) {
   return [...arr]
}


    function  make_great(magicianArry:string[]) {
     for(let i=0; i<magicianArry.length; i++){  
        magician[i] ='great'+ magicianArry[i] }
     
    }    


function show_magicians(magician:string[]) {

}magician.forEach(element => { 
    console.log(element);

    
});
   const copymagicianArray  =  copyArray(magician)
   console.log('this is my origin arry');

 make_great(copymagicianArray);
console.log('this is my modfied arry');
 show_magicians(copymagicianArray);
