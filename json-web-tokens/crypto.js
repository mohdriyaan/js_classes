import readline from "readline-sync"
import cryptojs from "crypto-js"

let token = readline.question("Enter the token : ")
let key="riyaan"

let encrypt=cryptojs.AES.encrypt(token,key).toString()

console.log(`Your encrypted string is ${encrypt}`)

let decrypt=cryptojs.AES.decrypt(encrypt,key);
let originalString=decrypt.toString(cryptojs.enc.Utf8)

console.log(`\nYour Decrypted Token is : ${originalString}`)