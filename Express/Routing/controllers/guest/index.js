import express from "express"

const PORT = 5000

const router = express.Router()

router.get("/register",(req,res)=>{
    res.status(200).json({msg : "Register Guest API"})
})

router.get("/login",(req,res)=>{
    res.status(200).json({msg : "Login Guest API"})
})

export default router