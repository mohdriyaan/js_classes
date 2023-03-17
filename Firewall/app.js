import http from "http"
import url from "url"

const port = 80 // use sudo access 


async function main(){
    let httpServer = http.createServer((req,res)=>{
        // console.log(req.socket.localAddress) // My Router Device IP
        // console.log(req.socket.remoteAddress) // Except My Router IP
        if(req.socket.remoteAddress=="192.168.1.7"){
            res.end("I am Accessing From Laptop")
        }else if(req.socket.remoteAddress=="192.168.1.3"){
            res.end("I am Accessing From Phone 1 ")
        }else if(req.socket.remoteAddress=="192.168.1.3"){
            res.end("I am Accessing From Phone 2 ")
        }else{
            res.end("Page Not Found . ")
        }
    
    })

    httpServer.listen(port,(req,res)=>{
        console.log(`Server listening at port number ${port}`)
    })
}
main()