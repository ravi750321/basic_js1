const programming = ["js", "rb", "py", "java", "cpp"]

// programming.forEach(function (val){
//     console.log(val);
    
// })


// programming.forEach((val)=>{
//     console.log(val);
    
// })

function pritMe(val){
    console.log(val);
    
}
// programming.forEach(pritMe) 

programming.forEach((val,index,arr) => {
    // console.log(val,index,arr);
    
})


const myCoding = [
    {
        langName:"javaScript",
        langFileName:"JS"
    },
    {
        langName:"java",
        langFileName:"JV"
    },
    {
        langName:"Python",
        langFileName:"PY"
    }
]

myCoding.forEach((val)=>{
    console.log(val.langFileName);
    
})
