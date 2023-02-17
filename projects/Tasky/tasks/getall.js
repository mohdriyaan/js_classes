import fs from "fs/promises";
import readline from "readline-sync";
import main from "../app.js";
import login from "../users/login.js";
import ask from "../utils/ask.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken"

export default async function getall() {
  console.clear();
  console.log("===========================================");
  console.log("=============== Fetch All Task ============");
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
    let findId = emailFound.todos.map((x) => x.todo);
    console.log(findId);

    if (!findId) {
      console.log("Invalid Id");
      return;
    }
    ask();

    // console.log("Todo Updated Succesfully");
    // console.log("Redirecting You To Login 4 Seconds");
    // setTimeout(() => {
    //   main();
    // }, 4000);
  }
}
