import express from "express"
import env from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorHandler.js"
import connectDb from "./config/dbConnection.js"

connectDb()
env.config()
const app=express()

const port = process.env.PORT||8005

app.use(express.json()) // Body passer
app.use("/api/contacts",contactRoutes)
app.use("/api/users",userRoutes)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})