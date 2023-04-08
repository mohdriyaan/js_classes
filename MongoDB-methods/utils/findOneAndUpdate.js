import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function findOneAndUpdate() {
  try {
    let check = await userModel.findOneAndUpdate(
      { email: "riyaan123@gmail.com" },
      { $set: { firstname: "Alex" } },
      { new: true }
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

findOneAndUpdate();