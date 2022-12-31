import readline from "readline-sync"
import color from "cli-color"

const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)
function main(){
    console.clear()
    console.log(red("*****************************"))
    console.log(green("\n       Base64 Encoding       "))
    console.log(red("\n*****************************"))
    const ask = readline.question(pink("\nEnter the string to encode in base64 : "))
    let arr = ask.split("")
    console.log(pink("Split String : "+arr))
    
    let ascii = arr.map((arr)=>(arr.charCodeAt()))
    console.log(orange(`\nASCII Codes : ${ascii}`))
    let binary= ascii.map((ascii)=>(ascii.toString(2)))
    console.log(blue(`Binary Codes : ${binary}`))
    let binary1= binary.map((binary)=>(binary.padStart(8,"0")))
    console.log(blue(`Binary Codes in 8 bits : ${binary1}`))
    let join=binary1.join("")
    let binary2= join.match(/.{1,6}/g)
    console.log(blue(`Binary Codes in 6 bits : ${binary2}`))
    let a=binary2.at(-1)
    let b=binary2.at(0)

    if((a.length)==(b.length)){
        console.log(binary2)
    }else if((a.length)==4){
        binary2[binary2.length -1]=binary2[binary2.length -1].padEnd(6,"0")
        console.log(binary2)
    }else if((a.length)==2){    
        binary2[binary2.length -1]=binary2[binary2.length -1].padEnd(6,"0")
        console.log(binary2)
    }
    let decimal=binary2.map((binary2)=>parseInt(binary2,2))
    console.log(decimal)

    let base64Table ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let output = decimal.map((decimal) => base64Table.charAt(decimal)).join("");
    if((a.length)==(b.length)){
        console.log(green(output))
    }else if((a.length)==4){
        console.log(green(output.concat("=")))
    }else if((a.length)==2){
        console.log(green(output.concat("==")))
    }
}
main()