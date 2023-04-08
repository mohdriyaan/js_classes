const makeApicall=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This API executed in : "+ time)
        },time)
    })
}

let multiApiCall=[makeApicall(1000),makeApicall(200),makeApicall(800)]

Promise.all(multiApiCall).then((values)=>{
    console.log(values)
})

Promise.race(multiApiCall).then((values)=>{
    console.log(values)
})
