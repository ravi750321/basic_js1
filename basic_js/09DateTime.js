let myDate = new Date()
// console.log(myDate);

// Date Functions ************************
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());

// +++++++++++++++++How to Declare Time +++++++++++++

// let myCrateDate = new Date(2023,0,20)
// let myCrateDate = new Date(2023,0,20,5,3)
// console.log(myCrateDate.toDateString());
// console.log(myCrateDate.toLocaleString());

//How to declare DAte*****************
let myCrateDate = new Date("01-20-2023")
console.log(myCrateDate.toLocaleString());

let myTimeStamp = Date.now()  // in milisecond
console.log(myTimeStamp);
console.log(myTimeStamp.getTime);
console.log(Math.floor(Date.now()/1000)) // ms in Sec

//++++++++++++++++++++++
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  //getMonth month js me 0 se start hota hai
console.log(newDate.getDay());    //getDay

// String Interpolation
console.log(`Date is ${newDate.getDate()} and month is ${newDate.getMonth()+1}`);

// How to use Customized toLocaleString
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit"
}))

