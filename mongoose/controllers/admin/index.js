import express from "express"
import adminModel from "../../model/admin/TaskyAdmin.js"

const router = express.Router()

router.use(express.json())
router.post("/register",async(req,res)=>{
    try{
        let clientData = req.body
        let clientDataVerify = new adminModel(clientData)
        await clientDataVerify.save()
        res.status(201).json({"message":"User Registered Successfully!!"})
    }catch(err){
        console.log(err.errors)
        res.status(501).json({message:err.errors})
    }
})

export default router