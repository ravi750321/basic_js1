 let a = 555      // outer scope

// var c = 30  // var use nhi karna hai

if(true){
    let a = 10
    const b= 20 
    // console.log("Inner:",a);  // Inner Scope
}
// console.log(a);
// console.log(b);

// nested scope 


function one() {
    const user = "Ravi"
    function two() {
        const website = "Youtube"
        console.log(user);
        
    }
//  console.log(website);
  two()
}

// one()

if (true) {
    const username = "Ravi Sinha"
    if (username==="Ravi Sinha") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++ Intresting +++++++++++++++++++

console.log(addOne(5)) // successfully run before declaration

function addOne(num){
   return num+1
}

// addTwo(5) // Error in this case
let addTwo = function(num2) {
    return num2 + 2
}

// console.log(addTwo(5))

// Loops me cover hoga

// let arrayNew = [1,2,3,4,5]
// for (let index = 0; index < arrayNew.length; index++) {
//     const element = arrayNew[index];
//     console.log(element);
// }

