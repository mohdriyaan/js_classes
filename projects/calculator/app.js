import readline from "readline-sync"
import color from "cli-color"
const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)
let ask1
let ask2
let ask3
function main(){
    console.clear()
    console.log(green("****************************************"))
    console.log(orange("\n           CALCULATOR PROJECT          "))
    console.log(green("\n****************************************"))

    ask1 = readline.question(blue("\nEnter First Number : "))
    if(Number(ask1)){
        main1()
    }else{
        console.log("Invalid Input")
        main()
    }
}
function main1(){    
    ask2 = readline.question(blue("Enter Second Number : "))
    if(Number(ask2)){
        main2()
    }else{
        console.log("Invalid Input")
        main1()
    }
}
function main2(){
    ask1=Number(ask1)
    ask2=Number(ask2)
    console.log(green("\n******************************************"))
    console.log(pink("\nThe operations available are : \n1.Addition(+)\n2.Subtaction(-)\n3.Multiplication(*)\n4.Division(/)\n5.Modulus(%)"))
    console.log(green("\n******************************************"))
    
    ask3= readline.question(blue("\nEnter the operator : "))
    let result;

    switch (ask3) {
        case "+":
            result=ask1+ask2
            console.log(red(`The Sum Will be : ${ask1}+${ask2}=${result}`))
            break;
            
        case "-":
            result=ask1-ask2
            console.log(red(`The Difference Will be : ${ask1}-${ask2}=${result}`))
            break;
        case "*":
            result=ask1*ask2
            console.log(red(`The Product Will be : ${ask1}*${ask2}=${result}`))
            break;
        case "/":
            result=ask1/ask2
            console.log(red(`The Dividend Will be : ${ask1}/${ask2}=${result}`))
            break;
        case "%":
            result=ask1%ask2
            console.log(red(`The Modulus Will be : ${ask1}%${ask2}=${result}`))
            break;
        default:
            console.log("The operator You have entered is not available.") 
            main2()          
    }

}
main()