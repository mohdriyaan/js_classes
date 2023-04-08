import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function insertOne() {
  try {
    let check = await userModel.create(
    {
        firstname: "John",
        lastname: "Wick",
        email: "john@gmail.com",
        phone: "+91908789680",
        address: "Hyderabad"
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

insertOne();
