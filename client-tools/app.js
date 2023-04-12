import http from "http"
import config from "config"
import axios from "axios"

let url = config.get("URL")

async function getURL(){
    let result = await axios.get(url)
    console.log(result)
}
getURL()
// const server = http.createServer((req,res)=>{
//     res.write("Hello NodeJS Server")
// })

