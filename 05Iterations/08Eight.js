// ========= Reduce ===========

const myNum = [1,5,6,9]

const totalVal = myNum.reduce((acc,curVal)=> {
    return acc + curVal
},0)

console.log(totalVal);
