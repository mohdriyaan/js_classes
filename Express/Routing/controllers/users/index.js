import express from "express"

const router = express.Router()

router.get("/register",(req,res)=>{
    res.status(200).json({msg : "Register User API"})
})

router.get("/login",(req,res)=>{
    res.status(200).json({msg : "Login User API"})
})

export default router


