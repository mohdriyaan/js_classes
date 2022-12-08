// JS Program to swap 2 variables

// function swap(a,b){
//     [a,b]=[b,a] //destructuring mechanism 
//     console.log(a , b)
// }

// swap(4,5)
// swap(10,9)

//Using Temporary variable
let a= prompt("Enter 1st variable : ")
let b= prompt(`Enter 2nd variable : `)

let temp
temp =a
a=b
b=a

console.log(`The value of 1st variable after swapping will be ${a}`)
console.log(`The value of 2nd variable after swapping will be ${b}`)
