import http from "http" //in built module from nodejs
import url from "url"
const port=8008 //port number
import fs from "fs/promises"
async function main(){

    let httpServer=http.createServer(async(req,res)=>{
        // let read = await fs.readFile("package.json","utf-8")
        console.log(req)
        res.end("<h1>Youtube Riyaan</h1>")
    });
    httpServer.listen(port,(req,res)=>{
        console.log(`Server Listening At Port Number ${port}`)
    })
}
main()