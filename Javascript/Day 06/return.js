// Return is a keyword which can be used to stop the function as well as pass value to the next variable

function square(num){
    console.log(num*num) //It will stop the function here
    console.log("I am after return function") //This statement will not work
}
let output=square(2)  //It can also be used to pass value to this variable
console.log(output)


