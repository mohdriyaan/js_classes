import readline from "readline-sync"
import color from "cli-color"
import login from "./users/login.js"
import register from "./users/register.js"


const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)

let main=async()=>{
    console.clear()
    console.log(blue("---------------------------------"))
    console.log(green("------------TASKY CLI------------"))
    console.log(red("---------------------------------"))

    let options=["0.Exit",
    "1.Register",
    "2.Login",
    "3.Create Task",
    "4.Edit Task",
    "5.Get All Task",
    "6.Delete Task",
    "7.Delete User"];

    options.forEach((x)=>{
        console.log(pink(x))
    })
    
    let option=readline.questionInt(orange("\nEnter your Option : "))
    switch (option) {
        case 0:
            console.log(blue("Thanks For Using App!!"))
            break;
        case 1:
            await register();
            break;
        case 2:
            await login();
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        default:
            console.log("Please Select Correct Option.")
            main();
    }
}
main()

