// forEach() will give us the elements of an array
const num=[0,1,2,3,4,5,6]
num.forEach((x)=>console.log(x))

// map() will create a new array by mapping the function to the old array

const num1=[1,2,3,4,5,6,7,8]
let square = (x) => {
    return x*x
}
output=num1.map(square)
console.log(output)
