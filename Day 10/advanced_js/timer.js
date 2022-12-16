// Timer Function :- If you want to run a code at specific time then we use this function.
// In this function , we use setTimeout and setTimeinterval

// setTimeout accepts the function and time.
// setTimeout accepts time in milliseconds.
// setTimeout can be also called a built in function.

// First we take function
let table = (num=10) => {
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
// Using function call in a setTimeout
setTimeout(table,3000)
// Using function in setTimeout
setTimeout( table = (num=10) => {
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
},3000)

// We cannot use setTimeout function while using exported function as well we should not give argument in function.
// It will give us type error. 
