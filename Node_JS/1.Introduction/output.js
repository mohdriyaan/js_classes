import chalk from "chalk"
const x = 1
const y = 2
console.log(x,y)
console.clear() // Clears the terminal
console.count("Riyaan")
console.count("Riyaan")
console.count("Riyaan")
console.count("Mohammed") // Keeps the count of the statement printed
console.countReset("Riyaan") // Resets the count of the statement  
console.count("Riyaan")

// Time taken to print the statement

function sum(){
    console.log(`The Sum is : ${10+10}`)
}
function multiply(){
    console.log(`The Multiplication is : ${10*10}`)
}
function measureTime(){
    console.time("sum()")
    sum()
    console.timeEnd("sum()")
    console.time("multiply()")
    multiply()
    console.timeEnd("multiply()")

}
measureTime()

console.log(chalk.redBright("This statement is in color red "))
