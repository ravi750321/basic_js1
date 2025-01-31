const myName = "Ravi"
let age = 23

console.log(`my name is ${myName} and my age is ${age}`);   // Modern Syntax


const gameName = new String("ravi-Sinha")

console.log(gameName[0]);               //strng with index
console.log(gameName.length);           //length
console.log(gameName.toUpperCase());    //toUpperCase 
console.log(gameName.charAt(3));        // charAt
console.log(gameName.indexOf("a"));     // indexOf

// ***********************************************

const newStr = gameName.substring(0,4)  // substring
console.log(newStr);

const anotherStr = gameName.slice(-8,4)  // slice
console.log(anotherStr);

const newStrone = "  Ravi Sinha  "
console.log(newStrone);
console.log(newStrone.trim());        // trim
console.log(newStrone.trimStart());   // trim Start
console.log(newStrone.trimEnd());     // trim End

// ******* Find Repalce Include
const  url = "ravi@sinha%20123.com"
console.log(url.replace("%20","-"));    // replace

console.log(url.includes("ravi"));     // include check true or false
console.log(url.search("ravi"));      // search - position of Str

const newNameOne = "ravi-sinha-com"
console.log(newNameOne.split("-",2));   //  split with limit
console.log(newNameOne.split("-"));     // split

