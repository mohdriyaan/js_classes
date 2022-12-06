//Break keyword is used to terminate loop based on condition.

// //Syntax: for(initialisation;condition;increment){
//       if(condition to break){
    // code
//  } 
// }

for(let i=1;i<=10;i++){
    if(i>=6){
        console.log(`${i}`)
        break;         // if i value is equal or greater then 6 then the loop will be terminated
    }
}