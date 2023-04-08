import express from "express"

const PORT = 5000 // Defining PORT.Best for backend

const app = express()

// HTTP METHODS :- 

// GET,POST,PUT,DELETE

// Simple Express Server

// You can send :-
// 1. Plain Text
// 2. HTML Code
// 3. JSON

const obj = {name:"Riyaan",age:22}

app.get("/",(req,res)=>{
    res.send("Hello I am Express Server")
    // res.send("Hello") You can only give one response at a time . 
})
// (req,res)=>{
    // res.send("Hello I am Express Server")
// })

// This whole part above is called Middleware

// Middleware => It handles your request , response
// Middlewares are nothing but they have access to your request , response including next function.

app.get("/html",(req,res)=>{
    res.send("<h1>HTML Code</h1>")
})

app.get("/json",(req,res)=>{
    res.json(obj)
})



app.listen(PORT,()=>{
    console.log(`Server Listening At Port Number ${PORT}`)
})

