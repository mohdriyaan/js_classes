import express from "express"

const app = express()

const port = 8005

const router = express.Router()

// Application-level middleware

const loggerMiddleware = (req,res,next)=>{
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`)
    next()
}

app.use(loggerMiddleware)
// Third-party middleware
// Router-level middleware
app.use("/api/users", router)
const getUsers = (req,res)=>{
    res.json({message:"Get All the users ."})
}

const createUser=(req,res)=>{
    res.json({message:"Create new user ."})
}

router.route("/").get(getUsers).post(createUser)
// Built-in middleware
// Error-handling-middleware

app.listen(port,(req,res)=>{
    console.log(`Server Listening At Port Number ${port}`)
})
