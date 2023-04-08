import express from "express"
import adminRoute from "./controllers/admin/index.js"
import userRoute from "./controllers/users/index.js"

const PORT = 5000

const app = express()

import "./dbConnect.js"

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Hello.I am Riyaan.</h1>")
})

app.use("/admin",adminRoute)
app.use("/users",userRoute)

app.use((req,res)=>{
    res.status(401).json({"message":"Invalid Route"})
})
app.listen(PORT,()=>{
    console.log(`Server Listening At PORT ${PORT}`)
})