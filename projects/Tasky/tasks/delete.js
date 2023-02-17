import fs from "fs/promises";
import readline from "readline-sync";
import main from "../app.js";
import login from "../users/login.js";
import ask from "../utils/ask.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken"

export default async function deleteTodo() {
  console.clear();
  console.log("===========================================");
  console.log("=============== Delete Todo ===============");
  console.log("===========================================");

  let email = readline.questionEMail("Enter Your Email : ");

  let readdb = await fs.readFile("db.json", "utf-8");
  let stringToObject = JSON.parse(readdb);

  let emailFound = stringToObject.find((value) => value.email === email);
  if (!emailFound) {
    console.log("No Email Found, Please Register");
    console.log("Redirecting You To Login 4 Seconds");
    return setTimeout(() => {
      login();
    }, 4000);
  } else {
    let encrypt=readline.question("\nEnter the token : ")
    let key = "riyaan" 
    let decrypt=CryptoJS.AES.decrypt(encrypt,key);
    let originalToken=decrypt.toString(CryptoJS.enc.Utf8)
    try {
      let decode=jwt.verify(originalToken,key)
      console.log("Your Token Is Valid . Please Continue.")
    } catch (error) {
      console.log("The token has expired . Please Login Again.")
      return setTimeout(() => {
        login();
      }, 4000);
    } 

    let askId = readline.question("\nEnter Your Todo Id : ");
    let findId = emailFound.todos.find((x) => x.id == askId);

    if (!findId) {
      console.log("Invalid Id");
      return;
    }

    let todoArray = emailFound.todos;

    let woTodo = todoArray.findIndex((x) => x == findId);

    delete todoArray[woTodo];

    let final = emailFound.todos.filter((x) => {
      return x != null;
    });
    emailFound.todos = final;

    let writeData = JSON.stringify(stringToObject);
    await fs.writeFile("db.json", writeData);
    console.log("Todo Deleted Succesfully");
    ask();
  }
}
