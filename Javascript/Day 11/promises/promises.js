// Promises

// console.log("Hello I am 1")
// setTimeout(console.log("Hello I am 2"),0)
// console.log("I am 3")

// A Promise is Place Holder for certain period of time which will be filled with value later from asynchronous operations.
// A container for future value == Promises

// Custom Promise
let data = new Promise((resolve,reject)=>{
    resolve();  // It is used for then
    reject();   // It is used for catch
})

data 
    .then(()=>{
        console.log("I am Hello Is All Ok then go to next");
    })
    .then(()=>{
        console.lo("I am after 1st then");
    })
    .catch(()=>{
        console.log("I am Error")
    });
console.log(data.then())
// Promises has 3 stages
// Pending => A Promise is pending
// Fullfilled => .then  is successfully executed then the promises is fullfilled
// Rejected => .catch is executed then promise is rejected when you have error in .then block.