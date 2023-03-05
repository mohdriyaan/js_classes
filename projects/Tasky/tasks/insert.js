import fs from "fs/promises";
import readline from "readline-sync";
import main from "../app.js";
import login from "../users/login.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { scheduleJob } from "node-schedule";
import sendEmail from "../utils/sendEmail.js";
import sendSMS from "../utils/sendSMS.js";

let deadline,email,reminder1,reminder2;
let reminders=[]

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

    let addTodo = readline.question("Enter Your Todo : ");
    let _id = Math.random().toString(36).substr(2, 10);
    let todo = addTodo;
    let isCompleted=false;
    
    deadline=readline.question("Enter the deadline (Ex : Sat March 03 2023 22:00:00 GMT+0530 ) : ")
    
    if(deadline==null||deadline==""){
      console.log("The Deadline should not be Empty")
      setTimeout(insert,2000)
      return;
    }

    deadline = new Date(deadline);
    let presentTime=new Date()
    let diffrence=deadline-presentTime
    reminder1=new Date(+deadline-diffrence/2)
    reminder2=new Date(+deadline-diffrence/4)
    let mins=(deadline-new Date()) / (1000*60)
    let days=(deadline-new Date())/(1000*60*60*24)
    
    if(mins<2||days>30){
      console.log("The Deadline Should Be More than 30 Mins And Less than 30 Days and not be backdated.")
      setTimeout(insert,2000)
      return;
    }else{
      reminders.push(reminder1,reminder2)
      scheduleJob(reminder1,function(){
        sendEmail({
            to: email,
            subject: "Reminder 1",
            text: `Your Task ${todo} Reminder 1 is ${deadline}`
        }),
        sendSMS({
          body: `Your Task ${todo} Reminder 1 is ${deadline}`,
          phone: `+91` + `${details.phone}`,
        })
      });
      scheduleJob(reminder2,function(){
        sendEmail({
            to: email,
            subject: "Reminder 2",
            text: `Your Task ${todo} Deadline 2 is ${deadline}`
        }),
        sendSMS({
          body: `Your Task ${todo} Reminder 2 is ${deadline}`,
          phone: `+91` + `${details.phone}`,
        })
      }); 
      scheduleJob(deadline,function(){
        sendEmail({
            to: email,
            subject: "Deadline",
            text: `Your Task ${todo} has reached it's Deadline.`
        }),
        sendSMS({
          body: `Your Task ${todo} has reached it's Deadline.`,
          phone: `+91` + `${details.phone}`,
        })
        console.log("The Task has reached it's deadline.")
        console.log("Redirecting You To Login 4 Seconds");
        setTimeout(() => {
          main();
        }, 4000);     
      }); 
    }
    emailFound.todos.push({ _id, todo ,isCompleted, deadline ,reminders });
  
    let writeData = JSON.stringify(stringToObject);
    await fs.writeFile("db.json", writeData);
    console.log("Todo Added Succesfully");
  }    
}

