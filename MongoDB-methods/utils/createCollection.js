import "../dbConnect.js";

import mongoose from "mongoose";

// 1. Create a Schema
const mySchema = new mongoose.Schema({
  age: {
    type: Number,
  },
});

// 2. Create a Model
// create a Mongoose model for the collection
const myModel = mongoose.model("NEW COLLECTION", mySchema, "practicing");
// CustomName,SchemaName,NewCollectioName
async function createNewCollection() {
  try {
    let createNewCollection = await myModel.create({
        age:22
    });
    console.log(createNewCollection);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

createNewCollection();
