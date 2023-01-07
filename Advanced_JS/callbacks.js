// CallBacks means calling the function inside other function.
function one(call_two){
    console.log("This is function 1")
    call_two(two)
}
function two(){
    console.log("This is function 2")
}
one(two);
