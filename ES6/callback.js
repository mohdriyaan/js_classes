// Call Back Function :- A Function passes as an argument in another function
function name(name,anotherFn){
    console.log(name)
    anotherFn("Riyaan")
}
name("Mr",name1)
function name1(name){
    console.log(name)
}
