import readline from "readline-sync"
import color from "cli-color"
import fs from "fs/promises"
import generaterandom from "../utils/otp.js"
import sendSMS from "../utils/sms.js"



const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)

async function login(){
    console.clear()
    console.log(blue("------------------------------------"))
    console.log(red("-------------USER LOGIN------------"))
    console.log(blue("------------------------------------\n"))

    let fileName="db.json"
    let data=await fs.readFile(fileName,"utf-8")
    // console.log(data)
    let data1=JSON.parse(data)
    // console.log(data1)
    let email_data=data1.map((data1)=>((data1).email))
    // console.log(email_data)
    let password_data=data1.map((data1)=>((data1).password))
    // console.log(password_data)
    let otp=generaterandom(4)
    let phone_data=data1.map((data1)=>((data1).phone))
    let userData=phone_data.pop()
    // console.log(userData)
    
    let email=readline.question(pink("Enter Your Email : "))
    let password=readline.question("Enter your Password : ",{
        hideEchoBack:true  
    })
    if(email==""||email==null||password==""||password==null){
        console.log("You have not entered the email and password.")
        setTimeout(login,3000)
    }else if(!email.matchAll(email_data)||!password.matchAll(password_data)){
        console.log("Your email and password are not found . Please Verify it And Re-enter it.")
        setTimeout(login,3000)
    }else{
        sendSMS({
            body:`Your OTP Will Be ${otp}`,
            phone:`${userData}`
        });
        console.log("\nLogin Successfull.")
    }


    // sendSMS({
        // body:`YOUR OTP ${OTP}`,
        // phone:`${thisUser.phone}`
    // })
    // if email and password matches it should ask for sms otp . 
}

export default login
