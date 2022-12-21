import readline, { questionInt } from "readline-sync"
import color from "cli-color"

function main(){
    
    const red = color.xterm(1)
    const blue=color.xterm(31)
    const orange=color.xterm(166)
    const green=color.xterm(79)
    const pink=color.xterm(5)
    console.clear()
    console.log(green("****************************************"))
    console.log(orange("\n           CALCULATOR PROJECT          "))
    console.log(green("\n****************************************"))

    let ask1 = readline.questionFloat(blue("\nEnter the first number : "))
    let ask2 = readline.questionFloat(blue("Enter the second number : "))

    console.log(green("\n******************************************"))
    console.log(pink("\nThe operations available are : \n1.Addition(+)\n2.Subtaction(-)\n3.Multiplication(*)\n4.Division(/)\n5.Modulus(%)\n6.Power(^)"))
    console.log(green("\n******************************************"))

    let ask3= readline.question(blue("\nEnter the operator : "))

    switch (ask3) {
        case "+":
            console.log(red(`\nThe result will be : ${ask1+ask2}`))
            break;
        case "-":
            console.log(red(`\nThe result will be : ${ask1-ask2}`))
            break;
        case "*":
            console.log(red(`\nThe result will be : ${ask1*ask2}`))
            break;
        case "/":
            console.log(red(`\nThe result will be : ${ask1/ask2}`))
            break;
        case "%":
            console.log(red(`\nThe result will be : ${ask1%ask2}`))
            break;
        case "^":
            console.log(red(`\nThe result will be : ${Math.pow(ask1,ask2)}`))
            break;
        default:
            main()
            break;
            
    }
}
main()