import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function findOneAndReplace() {
  try {
    let check = await userModel.findOneAndReplace(
      { email: "kratos@gmail.com" },
      { firstname: "Leon",
        lastname:"Kennedy",
        email:"mrk@gmail.com"}
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

findOneAndReplace();