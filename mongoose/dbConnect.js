import mongoose from "mongoose";

const connect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://riyaan:riyaan@riyaan-cluster.udcs0wq.mongodb.net/100Tasky")
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}

connect()