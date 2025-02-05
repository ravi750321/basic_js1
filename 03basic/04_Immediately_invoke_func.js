// Immediately Invoked Function Expression
 (function chai() {
    console.log(`DB Connected`);
    
 })();  // IIFE


//  (function aurcode() {
//     console.log(`DB Connected`);
    
//  })() // syntax error please sure end with semicolon (;) in IIFE

 (()=>{
    console.log(`DB Connected 2`);
    
 })();


 // =========== // IIFE With Parameter and Argument =====================
 ((fname)=>{
    console.log(`DB Connected 2 ${fname}`);
    
 })("Ravi");  // Same As Function 

 // =========== // Named IIFE =====================

 (function chaiTwo(){
    // Named IIFE
    console.log(`DB Connected Named IIFE`);
    
 })();