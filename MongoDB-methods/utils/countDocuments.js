import mongoose from "mongoose";
import userModel from "../models/index.js";
import "../dbConnect.js"

async function countDocuments(){
    try {
        const check = await userModel.countDocuments()
        console.log(check)
        await mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}

countDocuments()