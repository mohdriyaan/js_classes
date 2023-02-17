import readline from "readline-sync";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import timer from "../utils/timer.js";
import login from "./login.js";
import otp from "../utils/otp.js";
import sendEmail from "../utils/sendEmail.js";
import sendSMS from "../utils/sendSMS.js";
import redirect from "../utils/redirect.js";


export default async function forgetPassword() {
  console.clear();
  console.log("===========================================");
  console.log("============= Forget Password =============");
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

  let forgetPasswordOTP;
  if (emailFound) {
    forgetPasswordOTP = otp(4);
    console.log(forgetPasswordOTP, "sent");

    await sendSMS({
      body: `Your Tasky App OTP is ${forgetPasswordOTP}`,
      phone: `+91` + `${emailFound.phone}`,
    });
  }

  let readingOTP = readline.questionInt("Enter OTP To Get Verify : ");
  if (+readingOTP !== forgetPasswordOTP) {
    console.log("Invalid OTP");
  } else {
    console.log("OTP Verified Sucessfully");
    let password = readline.question("Enter Your New Password : ", {
      hideEchoBack: true,
    });
    let password1 = readline.question("Enter Your Confirm Password : ", {
      hideEchoBack: true,
    });

    if (password !== password1) {
      console.log("Password Does Not Match");
      console.log("Redirecting You To Login 4 Seconds");
      setTimeout(() => {
        login();
      }, 4000);
    }

    emailFound.password = password;
    let saltRounds = 10;

    let hash = await bcrypt.hash(emailFound.password, saltRounds);
    emailFound.password = hash;

    console.log(emailFound);

    let writeData = JSON.stringify(stringToObject);
    await fs.writeFile("db.json", writeData);
    console.log("Password Changes Sucessfully");

    redirect();
  }
}
