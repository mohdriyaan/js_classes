// CLI Project On IP Address

import readline from "readline-sync"
import color from "cli-color"

const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)

function generateIp(){
    console.clear()
    console.log(red("***********************************"))
    console.log(green("\n        IP Address Project          "))
    console.log(red("\n***********************************"))

    let ip=readline.question(blue("\nEnter your IP Address : "))
    console.log(blue(ip))

    let split=ip.split(".")
    if((split.length==4) && (Number(split[0,1,2,3])>=0)&&(Number(split[0,1,2,3])<=255)){
        range()
    }else{
        console.log(pink("\nInvalid IP Address"))
    }
    
    function range(){
        console.log(pink("\nValid IP Address"))
        let result=split.join(".")
        let result1=parseFloat(result)
        if(result1>=parseFloat("0.0.0.0")&&result1<=parseFloat("127.255.255.255")){
            if(result1>=parseFloat("10.0.0.0")&&result1<=parseFloat("10.255.255.255")){
            console.log(orange("CLASS A and Private IP"))
        }else{
            console.log(orange("CLASS A and Public IP"))
        }
        }else if(result1>=parseFloat("128.0.0.0")&&result1<=parseFloat("191.255.255.255")){
            if(result1>=parseFloat("172.16.0.0")&&result1<=parseFloat("172.31.255.255")){
            console.log(orange("CLASS B and Private IP"))
        }else{
            console.log(orange("CLASS B and Public IP"))
        }    
        }else if(result1>=parseFloat("192.0.0.0")&&result1<=parseFloat("223.255.255.255")){
            if(result1>=parseFloat("192.168.0.0")&&result1<=parseFloat("192.168.255.255")){
            console.log(orange("CLASS C and Private IP"))
        }else{
            console.log(orange("CLASS C and Public IP"))
        }
        }else if(result1>=parseFloat("224.0.0.0")&&result1<=parseFloat("239.255.255.255")){
            console.log(orange("CLASS D and Public IP "))
        }else {
            console.log(orange("CLASS E and Public IP"))
        }
    }
}
generateIp()