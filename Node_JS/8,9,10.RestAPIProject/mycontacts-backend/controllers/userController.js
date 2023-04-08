import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

// @desc Register a user
// @route POST /api/users/register
// @access public

const registerUser=asyncHandler(async (req,res)=>{
    res.json({message:"register the user"})
})

// @desc Login a user
// @route POST /api/users/login
// @access public

const loginUser=asyncHandler(async (req,res)=>{
    res.json({message:"login user"})
})

// @desc Current user info
// @route POST /api/users/current
// @access private

const currentUser=asyncHandler(async (req,res)=>{
    res.json({message:"Current user information"})
})

export {registerUser,loginUser,currentUser}