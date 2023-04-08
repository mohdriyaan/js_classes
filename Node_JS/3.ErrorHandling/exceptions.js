// Handling Exceptions Using try and catch
// try {
//     doSomething()
// } catch (error) {
//     console.log("Error has occured .")
//     console.log(error)
// }

import CustomError from "./CustomError.js"

function doSomething(){
    let data = fetch("localhost:300/api")
    // console.log("I am from doSomething function")
    return data
}

// Uncaught Exceptions
// process.on("uncaughtException",(err)=>{
//     console.log("There was an uncaught exception .",err)
//     process.exit(1)
// })
// doSomething()

// Exceptions with promises

// const promise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve(doSomething())
//     }else{
//         reject(doSomething())
//     }
// })

// promise
//     .then((val)=>{
//         console.log(val)
//     })
//     .catch((err)=>{
//         console.log("Error has occured !")
//         console.log(err)
//     })

// Exceptions using async and await
const someFunction=async()=>{
    try {
        await doSomething()
    } catch (error) {
        throw new CustomError("Error has occured")
    }
}
someFunction()
