import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function updateMany() {
  try {
    let check = await userModel.updateMany(
      { email: "riyaan123@gmail.com" },
      { $set: { firstname: "Cool" } },
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

updateMany();