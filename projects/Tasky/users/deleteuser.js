import fs from "fs/promises";
import readline from "readline-sync";
import main from "../app.js";
import login from "../users/login.js";
import ask from "../utils/ask.js";

export default async function deleteUser() {
  console.clear();
  console.log("===========================================");
  console.log("=============== Delete User ===============");
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
    
    let findIndex = stringToObject.findIndex((x) => x == emailFound);

    delete stringToObject[findIndex];

    let final = stringToObject.filter((x) => {
      return x != null;
    });
    stringToObject = final;

    let writeData = JSON.stringify(stringToObject);
    await fs.writeFile("db.json", writeData);
    console.log("User Deleted Succesfully");
    ask();
  }
}
