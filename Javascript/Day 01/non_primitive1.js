// Non-Primitive
let arr1=[0,1,2]
let arr2=arr1
console.log(arr1)
console.log(arr2)
arr1.push(10)
console.log(arr1)
console.log(arr2)
// Here the data is stored in heap and its pointers[address] is stored in stack.So if we make some changes to arr1 then the arr2 will
// also be updated.This array is updated in heap and does not store the new pointer in stack.
 