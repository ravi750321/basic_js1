// ====================== If Statement ===============

// <,>,<=,>=,==,!=,===,!==

const isUserLoggedIn = true
const tempreTure = 41


// if(tempreTure<50){
//     console.log(`Tempreture is less than 50`);
// }else{
//     console.log(`Tempreture is greater than 50`);
// }
// console.log("Execute");

const score = 200 

// if(score>100){
//     let power = "fly"
//     console.log(`User Power:${power}`);
// }
// console.log(`User Power:${power}`)  // Error Var Out of Scope

// =============== =============== =================

// const balance = 1000
// if(balance>500) console.log("test"), console.log("test2"); // Bad Practice of code writing 

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// } else if(balance <900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
    
// }

// ============== ============= =============

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn&&debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle||loggedInFromEmail){
        console.log("User Logged In");
        
}


