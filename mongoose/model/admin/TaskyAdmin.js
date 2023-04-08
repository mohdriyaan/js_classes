import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 40,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  },
  confirmPassword: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  }
});

const adminModel = new mongoose.model("ADMIN", adminSchema, "admin");
///                                   "Custom Name" , SchemaName(Varianle Name), "collection"
export default adminModel;
