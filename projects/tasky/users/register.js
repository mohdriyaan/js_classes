import readline from "readline-sync"
import color from "cli-color"
import fs from "fs/promises"

const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)

async function register(){
    console.clear();
    console.log(pink("----------------------------------"))
    console.log(blue("----------USER REGISTER-----------"))
    console.log(pink("----------------------------------\n"))

    let firstName=readline.question(red("Enter your first name : "))
    let lastName=readline.question(red("Enter your last name : "))
    let email=readline.question(green("Enter your email : "))
    let phone=readline.question(green("Enter your phone number : "))
    let password=readline.question(orange("Enter your password : "))
    let password1=readline.question(orange("Enter Your Confirm Password : "))

    // first name
    if(firstName==""||firstName==null||!firstName.match(/[a-zA-Z]/)||firstName.length>15){
        register()
        return false;
    }else if(lastName==""||lastName==null||!lastName.match(/[a-zA-Z]/)||lastName.length>15){  // last name
        register()
        return false;
    }else if(email==""||email==null||!email.match(/[a-zA-Z]/)||!email.includes("@")||!email.includes(".")||email.at(0)=="@" //email
    ||email.at(-1)=="@"||email.at(0)=="."||email.at(-1)=="."||email.indexOf("@")>email.indexOf(".")){
        register()
        return false;
    }else if(phone==""||phone==null||phone.length!==10||!phone.match(/[0-9]/)||!phone.at(0).match(/[6-9]/)){
        register()
        return false;
    }else if(!password.match(password1)){
        register()
        return false;
    }else{
        console.log(pink("\nRegistration Successfull !!!"))
    }
    let userDetails={firstName,lastName,email,phone,password,password1}
    console.log(userDetails)
    

    let fileName="db.json";

    let read=await fs.readFile(fileName,"utf-8")
    // console.log(read)

    let stringtoObject=JSON.parse(read); //it converts string to object
    // console.log(stringtoObject)

    stringtoObject.push(userDetails)
    // console.log(userDetails)

    let objecttoString=JSON.stringify(stringtoObject)  //it converts object to string.

    await fs.writeFile(fileName,objecttoString);
    let getDetails=await fs.readFile(fileName,"utf-8")
    console.log(getDetails)

}
export default register