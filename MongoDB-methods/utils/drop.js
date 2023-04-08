import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function dropCollection() {
  try {
    let check = await userModel.collection.drop();
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

dropCollection();