import express from "express"

const PORT = 5000;

const app =express()

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/setTimeout",(req,res)=>{
    setTimeout(()=>{
        res.send("Hello")
    },5000)
})

// app.get("/",(req,res)=>{
    
// })
// If you don't give response , the request will be on loop

app.listen(PORT,()=>{
    console.log(`Server listening at PORT ${PORT}`)
})
