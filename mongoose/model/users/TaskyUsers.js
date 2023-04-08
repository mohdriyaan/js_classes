import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
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
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
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

const usersModel = new mongoose.model("USER", usersSchema, "users");
///                                   "Custom Name" , SchemaName(Variable Name), "collection"
export default usersModel;
