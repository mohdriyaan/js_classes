const personalDetails= {
    firstName : "Mohammed",
    lastName : "Riyaan" ,
    age : 21 ,
    address:{
        houseAddress : "xyz",
        pinCode : 500008,
    },
    collegeDetails : {
        collegeName : "Lords",
        collegeBranch : "IT",
        rollNo:061
    }
}
// To Access a Specific Value
// Using Dot(.) Method
console.log(personalDetails.age)
// Using Array Method 
console.log(personalDetails["collegeDetails"]["collegeBranch"])

// To Update the Values
personalDetails.age = 100000
console.log(personalDetails)

//To Delete Key value from object
delete personalDetails.age
console.log(personalDetails)
 
//Getting all the keys from objects 
for(let key in personalDetails){
    console.log(key)
}
//Getting all the values from objects
for(let values in personalDetails){
    console.log(personalDetails[values])
}
//Checking whether key exists in object or not // and it checks value in boolean i.e., true or false 
console.log("age" in personalDetails)
