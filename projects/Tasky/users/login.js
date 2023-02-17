import bcrypt from "bcrypt";
import fs from "fs/promises";
import readline from "readline-sync";
import insert from "../tasks/insert.js";
import timer from "../utils/timer.js";
import redirect from "../utils/redirect.js";
import otp from "../utils/otp.js";
import sendSMS from "../utils/sendSMS.js";
import jwt from "jsonwebtoken"
import CryptoJS from "crypto-js";

async function login() {
  console.clear();
  console.log("===========================================");
  console.log("================ Login ====================");
  console.log("===========================================");
  
  
  let readdb = await fs.readFile("db.json", "utf-8");
  let stringToObject = JSON.parse(readdb);
  
  let email = readline.questionEMail("Enter Your Email : ");

  let emailFound = stringToObject.find((value) => value.email === email);
  if (!emailFound) {
    console.log("No Email Found, Please Register");
    console.log("Redirecting You To Login 4 Seconds");
    setTimeout(() => {
      login();
    }, 4000);
  }
  let password = readline.question("Enter Your Password : ", {
    hideEchoBack: true,
  });

  let details = {};

  stringToObject.map((data) => {
    if (data.email == email) {
      details.firstname = data.firstname;
      details.lastname = data.lastname;
      details.email = data.email;
      details.phone = data.phone;
      details.address = data.address;
      details.password = data.password;
      details.todos = data.todos;
    }
  });
  
  let verify;
  if (emailFound) {
    let hashString = details.password;
    verify = await bcrypt.compare(password, hashString);
  }
  if (!verify) {
    console.log("Invalid Password");
    console.log("Redirecting You To Login Again in 4 Seconds");

    setTimeout(() => {
      login();
    }, 4000);
    return;
  }

  let loginOtp = otp(4);

  await sendSMS({
    body: `Your Tasky App OTP is ${loginOtp}`,
    phone: `+91` + `${details.phone}`,
  });

  let readingOTP = readline.questionInt("Enter OTP To Get Verify : ");
  if (readingOTP !== loginOtp) {
    console.log("Invalid OTP");
    login();
  } else {
    console.log("OTP Verified Sucessfully");
    let key="riyaan"
    let token=jwt.sign(
      details,
      key,
      {expiresIn:60*4}
    )
    let encrypt=CryptoJS.AES.encrypt(token,key).toString()
      
    console.log(`\nYour Token is ${encrypt}`)
    console.log("\nToken is valid for 4 minutes") 
    console.log("Successfully Logged In");
    setTimeout(() => {
      insert();
    }, 8000);
  }
}
export default login;
