
// function printName(){
//     console.log("R");
//     console.log("A");
//     console.log("V");
//     console.log("I");
// }

// // printName
// printName()

// Function type 1 -------------------==================================0000000000000000000000000000000

// function addTwoNum(num1,num2){
//     return num1 + num2
// }

// console.log(addTwoNum(2,"50"))
// console.log(addTwoNum(2,50))

// const sum = addTwoNum(2,50)
// console.log(sum);

//Function Type2 -----------+++++++++++++++++++--------------------------

// function addTwoNum(num1,num2){
//     //  console.log("Ravi");
//      let result = num1 + num2
//      return result
//     //  console.log(result);   // Unrechable code after return
     
// }



// const result = addTwoNum(2,50)
// console.log(result);


//Function Type3 -----------+++++++++++++++++++---------------------

// function addTwoNum(num1,num2){
//     return num1 + num2
// }

// const result = addTwoNum(2,50)
// console.log(result);


// =======================================

function logInUserMessage(username = "sam"){    //default value is sam

    // if(username===undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("please enter a username");
        return
    }
    return  `${username} just loggedIN`
}

// console.log(logInUserMessage("Ravi"))
console.log(logInUserMessage());
