// The node:os module provides operating system-related utility methods and properties. 
var os = require("node:os")
var totalMem = os.totalmem()
var freeMem = os.freemem()

console.log(`Total Memory is ${totalMem}`)
console.log(`Free Memory is ${freeMem}`)
