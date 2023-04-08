import express from "express"

const PORT = 5001

const app = express()

// HTTP SERVER

app.get("/",(req,res)=>{
    res.send("Welcome To Express Course")
    // res.send("Hello") You can only give one response at a time . 
})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port Number ${PORT}`)
})

