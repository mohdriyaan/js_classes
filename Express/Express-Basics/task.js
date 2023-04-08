import express from "express"

const PORT = 5000

const app = express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express Course</h1>")
    console.log(req.headers)
})

app.post("/post/:id",(req,res)=>{
    res.send(req.body)
    console.log(req.body)
    console.log(req.originalUrl) // same as url
    console.log(req.url)
    console.log(req.params)
    console.log(req.host)
})

app.get("/redirect",(req,res)=>{
    res.redirect("http://www.google.com")
})

app.get("/download",(req,res)=>{
    res.download("./introduction.txt")
})

app.put("/put",(req,res)=>{
    res.json({"message":"Message updated"})
})

// app.all("*",(req,res)=>{
//     res.send("Hello")
//     console.log(req.url)
//     console.log(req.method)
//}) // * means you can use any route without specifying it . app.all enables us to use all the CRUD methods .

app.delete("/delete",(req,res)=>{
    res.send("Delete homepage")
})

app.use((req,res)=>{
    res.status(404).send("route not found ")
})

app.listen(PORT,()=>{
    console.log(`Server Listening at PORT ${PORT}`)
})