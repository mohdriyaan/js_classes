import axios from "axios";

// API Application Programming Interface
// API Format is always in JSON
// All Programming Languages can access JSON FIles

// API Method or Browser Method
// GET :- It will get the data .. it shows the updated data (READ)
// POST :- You can write the data .. it will add the data (write)
// PUT :- You can update the data .. it will update the data (write)
// DELETE :- You can delete the data from database

// login form
// name:Suhail : POST
// GET : name : Suhail
// PUT : name : Suhail 

// 
let data=axios.get("https://api.github.com/users")
// console.log(data)
// user is pending
// so we know we have to make a promise
// to change the state to fullfilled we use .then and .catch

data
  .then((output) => {
    // console.log(output.data);

    let final = output.data;
    for (let i of final) {
      console.log(i.login);
    }
  })
  .catch((error) => {
    console.log("i AM CATCH");
  });
