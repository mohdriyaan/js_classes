import readline from "readline-sync"
import color from "cli-color"
import fs from "fs/promises"
import login from "./login.js"
import generaterandom from "../utils/otp.js"
import sendMail from "../utils/email.js"


const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)

let firstName,lastName,email,phone,password,password1;
async function register(){
    console.clear();
    console.log(pink("----------------------------------"))
    console.log(blue("----------USER REGISTER-----------"))
    console.log(pink("----------------------------------\n"))


    firstName = await askname();
    lastName=await askname1();
    email = await askemail();
    phone= await askphone();
    password = await askpassword();
    password1= await confirm()
    
    
   
    let userDetails={firstName,lastName,email,phone,password,password1}

    let fileName="db.json";

    let read=await fs.readFile(fileName,"utf-8")

    let stringtoObject=JSON.parse(read); //it converts string to object

    stringtoObject.push(userDetails)

    let objecttoString=JSON.stringify(stringtoObject)  //it converts object to string.

    await fs.writeFile(fileName,objecttoString);

    let otp=generaterandom(4)
    let data = await fs.readFile(fileName,"utf-8")
    let email_data=JSON.parse(data)
    let userData=email_data.map((email_data)=>((email_data).email))
    let data_user=userData.toString()
    if(email.matchAll(email_data)){
        sendMail({
            subject:"Testing",
            to:`${email}`,
            body:`Your OTP Will be ${otp}`
        })
        console.log("\n Registration is Successfull")
        setTimeout(login,5000)
    }else{
        console.log("Email Is Not Found . Please Verify It.")
        await register()
    }

    // console.log("\n Registration is Successfull")

    // setTimeout(login,5000)
    // The moment after register is succesfull it should ask input otp.And otp should be sent to the email in which you have added previously.
    // if otp matches call login function function before registration is succesfull.

}
async function askname(){
    firstName=readline.question(red("Enter your first name : "))
    if(firstName==""||firstName==null||!firstName.at(0).match(/[A-Z]/)||!firstName.match(/[a-zA-Z]/)||firstName.length>15){  // last name
        console.log("Invalid First Name")
        await askname()
    }else{
        return firstName
    }
}

async function askname1(){
    lastName=readline.question(red("Enter your last name : "))
    if(lastName==""||lastName==null||!lastName.match(/[a-zA-Z]/)||lastName.length>15||!lastName.at(0).match(/[A-Z]/)){  // last name
        console.log("Invalid Last Name")
        await askname1()
    }else{
        return lastName
    }
}
async function askemail(){
    email=readline.question(green("Enter your email : "))
    if(email==""||email==null||!email.match(/[a-zA-Z]/)||!email.includes("@")||!email.includes(".")||email.at(0)=="@" //email
    ||email.at(-1)=="@"||email.at(0)=="."||email.at(-1)=="."||email.indexOf("@")>email.indexOf(".")||email.substring(email.length -3)!=="com"){
        console.log("Invalid Email")
        await askemail()
    }else{
        return email
    }
}
async function askphone(){
    phone=readline.question(green("Enter your phone number : "))
    if(phone==""||phone==null||phone.length!==13||!phone.match(/[0-9]/)||phone.substring(0,3)!=="+91"||!phone.at(3).match(/[6-9]/)){
        console.log("Invalid Phone Number")
        await askphone()
    }else{
        return phone
    }
}
async function askpassword(){
    password=readline.question("Enter your password : ",{
        hideEchoBack:true
    })
    if(password==""||password==null){
        console.log("Password should not be empty")
        await askpassword()
    }else if(password.length<10){
        console.log("Password should be more then 10 characters")
        await askpassword()
    }else if(!password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)){
        console.log("Password should have atleast one uppercase,lowercase,number and special character")
        await askpassword()
    }else{
        return password
    }
}
async function confirm(){
    password1=readline.question("Enter your confirm password : ",{
        hideEchoBack:true
    })
    if(password1==""||password1==null){
        console.log("Password should not be empty")
        await confirm()
    }else if(!password1.match(password)){
        console.log("Passwords does not match . Please Re-enter It Again.")
        await confirm()
    }else{
        return password1
    }
}
export default register