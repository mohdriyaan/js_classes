// To execute the promises sequentially and make our code cleaner and neat , we are using the async await keyword.
import axios from "axios"
// Await is used to wait for the promise . It can only be used inside async function()
// async await can only be used inside functions.
async function output(){
    let data = await axios.get("https://www.boredapi.com/api/activity")
    try{
        console.log(`Activity is ${data.data.activity}` )
    }
    catch{
        console.log(`The error is ${error}`)
    }
}
output()


