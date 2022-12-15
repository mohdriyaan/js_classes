// Throw Exception
let num=10
try{
    // if(num=num) throw "same"
    if(num>15) throw "Smaller than 10"
    if(num<11) throw new Error("Greater")
} catch(error){
    console.log(error)
}