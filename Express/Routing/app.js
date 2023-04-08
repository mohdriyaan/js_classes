import express from "express"
import adminAPI from "./controllers/admin/index.js"
import userAPI from "./controllers/users/index.js"
import guestAPI from "./controllers/guest/index.js"

const PORT = 5000;

const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("Home Server")
})

app.use("/admin",adminAPI)
app.use("/users",userAPI)
app.use("/guest",guestAPI)

app.use((req,res)=>{
    res.status(404).json({msg : "Invalid Route"})
})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port ${PORT}`)
})
