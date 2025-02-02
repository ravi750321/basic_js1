// const user1 = new Object()
// console.log(user1);

const user1 = {

}

// console.log(user1);

user1.id = "12313"
user1.name = "Ravi"
user1.isLoggedIn = false
// console.log(user1);

// --------------------------------------------------------

const regularUser = {
    email:"ravi@google.com",
    name:{
        fullname:{
            firstname:"ravi",
            lname:"Sinha"
        }
    }
}

// console.log(regularUser.name.fullname.firstname);  // name? for data fetch

// ****************************************

obj1 ={ 1:"r", 2:"a"}
obj2 ={ 3:"v", 4:"i"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}   // Spread Operator andstore in Object
// console.log(obj3);

const users = [
    {
        id:"485485",
        uname:"ravi"
    },
    {
        id:"485485",
        uname:"ravi"
    },
    {
        id:"485485",
        uname:"ravi"
    }
]

console.log(users[1].uname);  // Object value under array

// console.log(user1);

// console.log(Object.keys(user1));   // o/p keys of object

// console.log(Object.values(user1));  // o/p values of object

// console.log(Object.entries(user1));   // o/p entries of object
  
console.log(user1.hasOwnProperty("isLoggedIn"));  // check for object me property hai ya nhi

// Object deStructure =============================================

const cource = {
    courceName:"js in hondi",
    fees: "999",
    courceInstructor:"hitesh"
}

// cource.courceInstructor

const{courceInstructor:instructor} = cource

// console.log(courceInstructor);  //Eror after given Alias name instructor
console.log(instructor);


const{fees:fee} = cource
// console.log(fees);
console.log(fee);
