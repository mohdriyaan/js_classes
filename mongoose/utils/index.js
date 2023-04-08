import mongoose from "mongoose";
import usersModel from "../model/users/TaskyUsers.js";
import adminModel from "../model/admin/TaskyAdmin.js";
import "../dbConnect.js";

// Manually storing the data in mongoDB Without PostMan
//insert user
async function insertUser() {
  let clientData = {
    firstName: "Mohammed",
    lastName: "Riyaan",
    email: "hello@gmail.com",
    age:22,
    phone: "+919618211627",
    address: "Hyd",
    password: "12345678",
    confirmPassword: "1234578",
  };

  const validate = new usersModel(clientData)
  await validate.save()
}
// insertUser()

async function findAll(){
    try{
        let findAllData = await usersModel.find({})
        console.log(findAllData)
    }catch(error){
        console.log(error.errors)
    }
}
// findAll()

// Update Data
async function updateData(){
    try {
        await usersModel.updateOne({_id:"642c7329338bb853f7c00902"},{$set:{firstName:"Hi"}})
    } catch (error) {
        console.log(error.errors)
    }
}
updateData()
// Deleting 
async function deleteUsers(){
    try{
        await adminModel.deleteMany()
        // await usersModel.save()
    }catch(error){
        console.log(error.errors)
    }
}
deleteUsers()
