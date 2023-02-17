import { scheduleJob } from "node-schedule";
import readline from "readline-sync"
import sendEmail from "../utils/sendEmail.js"
let deadline=readline.question("Enter the deadline : ")
const date = new Date(deadline);
console.log(date)
// console.log(typeof date)
// console.log(date)
scheduleJob(date, function(){
    sendEmail({
        to: "mohammedrayaan1@gmail.com",
        subject: "Deadline",
        text: `Your deadline is ${date}`
    })
});
