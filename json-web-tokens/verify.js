import readline from "readline-sync"
import jwt from "jsonwebtoken"

function main(){

let token = readline.question("Enter the token : ")
let key="riyaan"


let decode=jwt.verify(token,key)

console.log(decode)

}
main()