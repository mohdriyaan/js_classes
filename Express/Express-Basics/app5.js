import express from "express"

const PORT = 5000

const app = express()

// app.all("/",(req,res)=>{
//     res.send("Hello")
// }) 
// Uses all methods

// app.get("/riyaan",(req,res)=>{
//     console.log("GET Working")
//     res.redirect("http://google.com")
// })
// Redirects to google.com

app.use(express.json())
app.get("/",(req,res)=>{
    console.log("GET Working")
    res.send(req.method)
})

app.post("/post",(req,res)=>{
    console.log("POST Working")
    res.send(req.body)
    console.log(req.body)
    // res.send(req.method)
})

app.put("/put",(req,res)=>{
    console.log("PUT Working")
    res.send(req.method)
})

app.delete("/delete",(req,res)=>{
    console.log("DELETE Working")
    res.send(req.method)
})

app.listen(PORT,()=>{
    console.log(`Server Listening at PORT ${PORT}`)
})
