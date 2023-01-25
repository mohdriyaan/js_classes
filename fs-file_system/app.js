// Synchronous operations are executed first before asynchronous operations.

// ASYNC
// 1. Async Await
// 2. Promises
// 3.Timers
// 4.Generators
// 5. Function Call Backs.

// To execute in order we use promises
import fs from "fs/promises";

let main=async()=>{
    try{
    console.clear();
    console.log("Hello Boi.")
    let fileName="writeFileUsingPromises.txt"
    let data="Hi I am Riyaan."

    // fs.writeFile(fileName,data,(err,output)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log("Done")
    //     }
    // });
    let write= await fs.writeFile(fileName,data)
    console.log("Created")
    }catch(error){
        console.log(error)        
    }
};
main();
