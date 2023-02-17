import fs from "fs/promises";
import readline from "readline-sync";
import main from "../app.js";
import login from "../users/login.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { scheduleJob } from "node-schedule";
import sendEmail from "../utils/sendEmail.js";
import sendSMS from "../utils/sendSMS.js";

let deadline,email,remainder1,remainder2;
let remainders=[]

export default async function insert() {
  console.clear();
  console.log("===========================================");
  console.log("================ Add Task =================");
  console.log("===========================================");

  email = readline.questionEMail("Enter Your Email : ");
  let readdb = await fs.readFile("db.json", "utf-8");
  let stringToObject = JSON.parse(readdb);
  let details={}
  stringToObject.map((data) => {
    if (data.email == email) {
      details.phone = data.phone;
    }
  });

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

    let addTodo = readline.question("\nEnter Your Todo : ");
    let _id = Math.random().toString(36).substr(2, 10);
    let todo = addTodo;
    let isCompleted=false;
    await scheduledeadline()
    
    emailFound.todos.push({ _id, todo ,isCompleted, deadline ,remainders });
    let writeData = JSON.stringify(stringToObject);
    await fs.writeFile("db.json", writeData);
    console.log("Todo Added Succesfully");
    console.log("Redirecting You To Login 4 Seconds");
    setTimeout(() => {
      main();
    }, 4000);
  }
  async function scheduledeadline(){ 
    deadline=readline.question("Enter the deadline : ")
    if(deadline==null||deadline==""){
      console.log("The Deadline should not be Empty")
      await scheduledeadline()
    }
    deadline = new Date(deadline);
    let presentTime=new Date()
    let diffrence=deadline-presentTime
    remainder1=new Date(+deadline-diffrence/2)
    remainder2=new Date(+deadline-diffrence/4)
    let mins=(deadline-new Date()) / (1000*60)
    let days=(deadline-new Date())/(1000*60*60*24)
    
    if(mins<30||days>30){
      console.log("The Deadline Should Be More than 30 Mins And Less than 30 Days and not be backdated.")
      await scheduledeadline()
    }else{
      remainders.push(remainder1,remainder2) 
      scheduleJob(remainder1,function(){
        sendEmail({
            to: email,
            subject: "Task Reminder 1",
            text: `Your deadline is ${deadline}`
        })
      })
      
      scheduleJob(remainder2,function(){
        sendEmail({
          to: email,
          subject: "Task Reminder 2",
          text: `Your deadline is ${deadline}`
        })
      })
      return deadline,remainder1,remainder2,remainders;
    }
  }
}
