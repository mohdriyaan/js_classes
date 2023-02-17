import readline from "readline-sync";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import redirect from "../utils/redirect.js";
import timer from "../utils/timer.js";
import login from "./login.js";
import otp from "../utils/otp.js";
import sendEmail from "../utils/sendEmail.js";

async function register() {
  try {
    console.clear();
    console.log("===========================================");
    console.log("================ Register =================");
    console.log("===========================================");

    let firstname = readline.question("Enter Your First Name : ");
    let lastname = readline.question("Enter Your Last Name : ");
    let email = readline.questionEMail("Enter Your Email : ");
    let phoneString = readline.question("Enter Your Phone Ex : 9618211626 : ");
    let phone = Number(phoneString);
    let address = readline.question("Enter Your Address : ");

    if (phoneString.length > 10 || phoneString.length < 10) {
      console.log("Invalid Phone Number");
      redirect();
      return;
    }

    let password = readline.question("Enter Your Password : ", {
      hideEchoBack: true,
    });
    if (password.length < 6) {
      console.log("Invalid Password");
      redirect();
      return;
    }
    let password1 = readline.question("Enter Your Confirm Password : ", {
      hideEchoBack: true,
    });

    let userData = {
      firstname,
      lastname,
      email,
      phone,
      address,
      password,
      password1,
    };
    userData.todos = [];

    // User Register Validations

    // DB Operation
    let readdb = await fs.readFile("db.json", "utf-8");
    // console.log(readdb);

    let stringToObject = JSON.parse(readdb);

    let emailFound = stringToObject.find(
      (user) => user.email == userData.email
    );
    let mobileFound = stringToObject.find(
      (user) => user.phone == userData.phone
    );
    if (emailFound || mobileFound) {
      return console.log("User Already Registered");
    }
    if (userData.password !== userData.password1) {
      return console.log("Password Does Not Match");
    }

    let saltRounds = 10;

    let hash = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hash;

    stringToObject.push(userData);
    delete userData.password1;

    let registerOtp = otp(4);

    await sendEmail({
      to: email,
      subject: `OTP Verification`,
      text: `Your Tasky App OTP is ${registerOtp}`,
    });

    let readingOTP = readline.questionInt("Enter OTP To Get Verify : ");
    if (readingOTP !== registerOtp) {
      console.log("Invalid OTP");
      redirect();
    } else {
      console.log("OTP Verified Sucessfully");

      let writeData = JSON.stringify(stringToObject);
      await fs.writeFile("db.json", writeData);
      console.log("User Registered Succesfully");

      console.log("Redirecting You To Login 4 Seconds");

      setTimeout(() => {
        login();
      }, 7000);
    }
  } catch (error) {
    console.log(error);
  }
}

export default register;
