const promiseOne = new Promise(function (resolve,rejected){
    setTimeout(function (){
        console.log("Async Task Done");
        resolve()        

    },1000)
})
promiseOne.then(function (){
    console.log("Promise Done");
    
})

new Promise(function (resolve,rejected){
    setTimeout(function (){
        console.log("Async Task 2 Done");
        resolve()
        
    },1000)
}).then(function (){
    console.log("Promise 2 Done");
    
})

const promiseThird = new Promise(function (resolve,rejected){
    setTimeout(function (){
        resolve({userName:"Chai",email:"ravi@example.com"})

    },1000)

})

promiseThird.then(function (user){
    console.log(user);
    
})

const promiseFour = new Promise(function (resolve,rejected){
    setTimeout(function (){
        let error = false 
        if(!error){
            resolve({userName:"Ravi",Password:"1233"})
        }else{
            rejected("Error: Something Went Wrong")
        }  
    },1000)
})
promiseFour.then((user)=>{
     console.log(user);
     return user.userName
     
}).then((userName)=>{
     console.log(userName);
     
}).catch(function (err){
     console.log(err);
     
})
