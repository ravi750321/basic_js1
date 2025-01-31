// Array Declaration
const myAarray = [2,6,5,8,9,4]                 //01
const myHeros = ["shaktiman","jrG","hatim",5,7]   //02
const myArray2 = new Array(10,.20,50,63,54,13)  //03
// console.log(myAarray[3]);
// console.log(myAarray.length);   // length of array
// console.log(myAarray.lastIndexOf(5)); 
// console.log(myAarray.reverse())   // Reverse Array

// Array Methods ----------------------------------

// myAarray.push(7)
// myAarray.push(15)
// myAarray.pop()
// myAarray.unshift(33)  // value staert me push hota hai
// myAarray.shift()     // value one address shift karta hai

// console.log(myAarray.includes(8));  // output true or false
// console.log(myAarray.indexOf(6));    // return index of value or element

const newAray = myAarray.join()    // Bind and convert in String

// console.log(myAarray); 
// console.log(newAray);        
// console.log(typeof newAray);   // return in String

// Slice and Splice 

// console.log("A",myAarray);
// const newArray2 = myAarray.slice(1,3)  // Slice
// console.log(newArray2);
// console.log("B",myAarray);

// const newArray3 = myAarray.splice(1,3) //Splice
// console.log(newArray3);
// console.log("C",myAarray);


// End of Part 01 ---------------------------

const marval_Heros = ["hulk","captain","spiderman"]
const old_heros = ["shaktiman","jrG","vikarm"]
const old_heros2 = ["hatim","jrG","vikarm"]
// marval_Heros.push(old_heros)        // old_heros Array ke Form me add hota hai bad habit
// console.log(marval_Heros);    

// const all_Heros = marval_Heros.concat(old_heros)  // dono concat aur old_Heros String me hota hai
// console.log(all_Heros);

const all_new_Heros = [...marval_Heros,...old_heros,...old_heros2]  // 2 ya 2 se jyada array ko merge karna
// console.log(all_new_Heros);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_Another_Array = anotherArray.flat(Infinity)  // convert multiple array in One by depth
// console.log(real_Another_Array);  

console.log(Array.isArray("Ravi"))
console.log(Array.from("Ravi"));
console.log(Array.from({name:"Ravi"}));  // Intresting for Interview

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

//  End of Array  ----------------------------------------------




 

