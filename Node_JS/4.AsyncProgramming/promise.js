const promise = new Promise((resolve,reject)=>{
    console.log("Async Task Execution")
    if(false){
        const person={name:"Riyaan"}
        resolve(person)
    }else{
        const error={errCode:"1001"}
        reject(error)
    }
})

promise.then(
    (val)=>{
        console.log(val)
    })
    .catch(()=>{
        console.log("Failed!!!")
    })
    .finally(()=>{
        console.log("clean up")
    })
