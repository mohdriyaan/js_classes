// Spread operator(...) is a new way to concat or push new array elements.
let arr1=[0,1,2]
console.log(arr1)
let arr2=[...arr1,3,4]
console.log(arr2)
let arr3=[5,6,7,8,9,10]
let arr4=[...arr2,...arr3]
console.log(arr4)

