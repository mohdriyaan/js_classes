import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function updateOne() {
  try {
    let check = await userModel.updateOne(
      { email: "riyaan123@gmail.com" },
      { $set: { firstname: "Mr" } },
      { new: true }
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

updateOne();