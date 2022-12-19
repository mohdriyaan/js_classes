const x=3456789876543456789 //It exceeds the maximum integer number,so it stores the last max number
console.log(x)
let b1=108024444444444444444444444444444444444444n //for storing large numbers we add n
console.log(b1,typeof b1)
// Error! BitInt and number cannot be added
const value2 = 900719925124740998n;
const result2 = value2 + 1; 
console.log(result2); 
//Here we cannot mix bigint with other data types
//Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). 

