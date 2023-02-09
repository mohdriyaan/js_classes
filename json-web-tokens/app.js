import readline from "readline-sync"
import jwt from "jsonwebtoken"
import cryptojs from "crypto-js"

function main(){
let name=readline.question("Enter your name : ")
let age = readline.questionInt("Enter your age : ")
let obj={
    name,
    age
}
let key="riyaan"

let token = jwt.sign(
    obj,
    key,
    {expiresIn:60*1}
)

console.log(token)

}
main()