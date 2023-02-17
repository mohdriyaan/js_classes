import { scheduleJob } from "node-schedule";
import readline from "readline-sync"
import sendEmail from "../utils/sendEmail.js"
async function cool(){
let deadline=readline.question("Enter the deadline : ")
const date = new Date(deadline);
scheduleJob(date, function(){
    sendEmail({
        to: "mohammedrayaan1@gmail.com",
        subject: "Deadline",
        text: `Your deadline is ${date}`
    })
});
}
await cool()
