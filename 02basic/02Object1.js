//01 Singleton  
//object.Create  // Singleton method

// 02 Object Literals

const mySymbol = Symbol("Key_Value")

const js_User = {
    name:"Ravi","fullName":"Ravi_Sinha",
    [mySymbol]:"myKey1",
    age:24,
    location:"Raipur",
    email:"ravi@google.com",
    isLoggedIn:true,
    lastLoggedInDays:["mon","friday"]
}

// console.log(js_User.age)
// // console.log(js_User[age])  //Error
// console.log(js_User["age"])
// console.log(js_User[mySymbol]);

// -----------------------------------------------

// js_User.email = "ravi56646@google.com"
// console.log(js_User["email"]);
// Object.freeze(js_User)          // to freeze object, jisse object me koi edit nhi hoga
// js_User.email = "ravi@openAI.com"
// console.log(js_User["email"]);
// console.log(js_User);

js_User.greeding = function() {
    console.log("Hello greeding");
    
}   // Function in JS

console.log(js_User.greeding());
console.log(js_User.greeding);

js_User.greedingTwo = function() {
    console.log(`Hello Greeding, ${this.name}`);
    
}
console.log(js_User.greedingTwo());