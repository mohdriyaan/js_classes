// flat() can convert multi dimensional arrays or nested arrays into single array.
// It also removes empty items.
const num1=[[0,1],[2,3],[5,7],[9,10]]
const num2=[0,1,,2,4,,5,6,,10]
let output1=num1.flat()
let output2=num2.flat()
console.log(output1 , output2)

// fiil() will modify the whole array with a given value or string.
const names=["riyaan","hello","computers","microsoft"]
let result=names.fill("Apple")
console.log(result)


