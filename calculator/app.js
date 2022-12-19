import readline from "readline-sync"
function main (){
    console.clear() // It clears the data above the output in the console.
// And only gives the output
    console.log("***********************")
    console.log("My Calculator")
    console.log("***********************")

    let num1 = readline.questionInt("Enter the first number : ")
    let num2 = readline.questionInt("Enter the second number : ")

    console.log(num1+num2)
    console.log(num1-num2)
    console.log(num1/num2)
    console.log(num1/num2)
    console.log(num1%num2)
}
main()
