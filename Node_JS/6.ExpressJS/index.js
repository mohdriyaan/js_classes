import express from "express";
const app=express()

const port = 8002

app.get("/",(req,res)=>{
    res.json({message:"This is home page ."})
})

app.get("/users",(req,res)=>{
    res.json({message:"Get All the users ."})
})

app.get("/users/:id",(req,res)=>{
    res.json({message:`Get User with ID ${req.params.id}`})
})

app.post("/users/",(req,res)=>{
    res.json({message:`Create new User`})
})

app.put("/users/:id",(req,res)=>{
    res.json({message:`Update User with ID ${req.params.id}`})
})

app.delete("/users/:id",(req,res)=>{
    res.json({message:`Delete User with ID ${req.params.id}`})
})

app.listen(port,(req,res)=>{
    console.log(`Server listening at port number ${port}`)
})

