import http from "http"
import fs from "fs/promises"

const port = 8005

async function main(){
    let httpServer = http.createServer(async (req,res)=>{
        // console.log(req.headers) // Client Access Information
        // start
        let responseFromClient= "";

        req.on("data",(data)=>{
            responseFromClient+= data;
        })
        req.on("end",async()=>{
            let read = await fs.readFile("data.json","utf-8")
            let stringToObject=JSON.parse(read)
            stringToObject.push(JSON.parse(responseFromClient))
            let write = await fs.writeFile("data.json", JSON.stringify(stringToObject));            
            console.log(JSON.parse(responseFromClient))
        })

        res.end("<h1>Server Running.</h1>")
    });

    httpServer.listen(port,(req,res)=>{
        console.log(`Server Listening At Port Number ${port}`)
    })
}
main()