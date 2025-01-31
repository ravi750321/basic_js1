const score = 300
console.log(score);

const balance = new Number(1000)  // number object creation
console.log(balance);

console.log(balance.toString().length);   // toString() - number method
console.log(balance.toFixed(2));          // toFixed()  - number method

const otherNumber = 28.254545
const otherNumberTwo = 128.554545
console.log(otherNumber.toPrecision(3));     // toPrecision - Number Method
console.log(otherNumberTwo.toPrecision(3));  // toPrecision - Number Method

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() 

//*****************// Math Functions //******************//
console.log(Math);
console.log(Math.abs(-4));   // absolute only -ve to +ve
console.log(Math.abs(4));    // absolute +ve, +ve hi rahega

// console.log(Math.round(4.6));   //  round function -- output 5
// console.log(Math.round(4.2));   // output 4
// console.log(Math.ceil(4.2));    // output 5
// console.log(Math.ceil(4.8));    // output 5
// console.log(Math.floor(4.8));   // output 4
// console.log(Math.floor(4.2));   // output 4

// console.log(Math.max(2,3,5,9,8));  // Max Value
// console.log(Math.min(2,3,5,9,8));   // Min Value

console.log(Math.random());  // Output Always 0 - 1
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10) + 1);

const  min = 20
const  max = 40

console.log(Math.floor(Math.random() * (max - min +1) ) + min);







