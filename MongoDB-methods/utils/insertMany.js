import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function insertMany() {
  try {
    let check = await userModel.create([
      {
        firstname: "Laura",
        lastname: "Taylor",
        email: "laurataylor11@example.com",
        phone: "+1-555-555-8013",
        address: "369 Elm Avenue"
      },
      {
        firstname: "Darth",
        lastname: "Vader",
        email: "darth@gmail.com",
        phone: "+917654567890",
        address: "Hyderabad"
      },
    ]);
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

insertMany();