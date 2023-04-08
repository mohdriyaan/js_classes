import express from "express"

const app = express()

const PORT = 5000

app.get("/",(req,res,next)=>{
    const text = "Hi"
    res.send("Express")
    next()
},(req,res)=>{
    console.log("Hello1")
})

app.get("/test",(req,res)=>{
    res.status(200).send("Tested Success.")
})

// Error handling
app.use((req,res)=>{
    res.status(404).json({message:"Invalid Route"})
})


app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`)
})