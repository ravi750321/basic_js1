const nums = [2,1,3,5,6,4,7,8,9,10]

// Filter loop
// const res = nums.filter((item)=>{
//     return item>4;
// })

// console.log(res);
//==========================

// For Each loop
// let newNum = [];
// nums.forEach((item)=>{
//     if(item>4) newNum.push(item);
// })

// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  const newBook =  books.filter((bk)=>{
//     return bk.publish>=1995&&bk.genre==="History";
//   })

//   console.log(newBook);
  

// const newNum = nums.map((num)=> num+10)
//                    .map((num)=>num*10)
//                    .filter((num)=> num>=140)
// console.log(newNum);

const values = [4,3,2]

// const res = values.reduce(function (acc,val) {
//      return acc + val
// }, 0)

// const res = values.reduce((acc,currval) => (acc + currval),0)

// const res = values.reduce((acc,currval) => {
//   return acc + currval
// },0)
// console.log(res);


const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

