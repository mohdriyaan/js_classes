import express from "express"

const PORT = 5000

const app = express()

app.use(express.json())

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.get("/download",(req,res)=>{
    res.download("./riyaan.txt")
})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port ${PORT}`)
})


