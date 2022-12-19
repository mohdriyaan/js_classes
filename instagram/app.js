import readline from "readline-sync"
function main(){
    console.clear()
    console.log("**************")
    console.log("Welcome To Instagram")
    
    console.log("**************")

    let userName = readline.question("Enter Your Username : ")
    let email = readline.questionEMail("Enter Your Email : ")
    let password = readline.question("Enter New Password : ",{
        hideEchoBack : true
    })
    console.log(userName,email,password)
}
main()