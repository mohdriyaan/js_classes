// slice() will give you the range of elements in an array

const num = [0,1,2,3,4,5,6]
output = num.slice(1,4)
console.log(output)

// In slice() method , the first parameter will be inclusive , i.e., the first index value will be included
// the second parameter will be exclusive , i.e., the last index value will be excluded and the value will be index-1

// splice() is opposite to slice where it will give us the deleted elements 
// using slice() , we can update the deleted values

const num2 = [1,2,3,4,5,6,7,8]
num2.splice(0,2,"hello")
console.log(num2)
