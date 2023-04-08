import readline from "readline-sync"

const userLogin=()=>{
    let username=readline.question("Enter username :")
    let password=readline.question("Enter password : ")

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Performing User Authenciation ")
        if(username=="riyaan"&&password=="riyaan"){
            resolve("User Authenciated!!")
        }else{
            reject("Failed")
        }
    },1000)
    })
}

function goToHomepage(userAuthStatus){
    return Promise.resolve(`Go to HomePage as ${userAuthStatus}`)
}

async function performTask(){
    try{
        const response=await userLogin()
        console.log("Validated User")
        const userAuthStatus=await goToHomepage(response)
        console.log(userAuthStatus)
    }catch(err){
        console.log("Error")
    }
}
performTask()