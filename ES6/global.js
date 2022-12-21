// Global Scope
var a = 10
let b= 12
const c = 18

function a1(){
    console.log(a,b,c)
}
a1()

{
    console.log(a,b,c)
}

console.log(a,b,c)
// The values a,b,c can be accessed anywhere.