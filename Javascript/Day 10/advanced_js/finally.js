// finally

// Syntax:-
// try{

// }catch(error){

// }finally{
//     // codes that gets executed anyways
//     // even if there is error it gets executed even if there is no error

// }
let a=1,b=2
try{
    console.log(a+b)
    console.log(c)
}catch(error){
    console.log("Error Message :" , error)
}finally{
    console.log("Hello I will print anyway bruh")
}

