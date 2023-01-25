import readline from "readline-sync"
import color from "cli-color"
import fs from "fs/promises"


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

    let email=readline.question(pink("Enter Your Email : "))
    let password=readline.question(pink("Enter Your Password : "))

    // let fileName="db.json"
    // let data=await fs.readFile(fileName,"utf-8")
    // let data1=JSON.parse(data)
    // let email_data=data1.((x) => toString((x).email))
    // let password_data=data1.forEach((x) => ((x).password))

    // console.log(email_data)
    // let email_data=data.pop("email")
    // let password_data=data.pop("password")

    // if(email!==email_data){
    //     login()
    //     return false
    // }else if(password!==password_data){
    //     login()
    //     return false
    // }else{
    //     console.log("Login Success")
    //     return true
    // }
}
export default login