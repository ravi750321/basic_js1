// ============ Prerequisites ====================
const user = {
    username:"RaviSinha",
    fee:"999",

    wecomeMessage:function() {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }
}

// user.wecomeMessage()
// user.username="shyam"
// user.wecomeMessage()

// console.log(this);


// =======================arrowFunction()==========================

//1.
// function chai() {

//     let userfname = "Ravi Sinha"
//     // console.log(this);   // Big Output Aayega
//     console.log(this.userfname);
// }
// chai()

//2.

// const chai = function() {
//     let userfname = "Ravi"
//     console.log(this.userfname);
// }

// 3.
// const chai = () => {
//         let userfname = "Ravi"
//         // console.log(this.userfname);  //undefined
//         console.log(this);  // empty parenthesis
// }

// chai()

// 4. =====Basic ArrowFunction =======

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2  //Implicit Return in arrow function
// const addTwo = (num1,num2) => (num1 + num2)  // Same thing
const addTwo = (num1,num2) => ({fname:"Ravi"})  // Object Return
console.log(addTwo(2,5))