import http from "http" //in built module from nodejs
const port=8006 //port number
function main(){

    let httpServer=http.createServer((req,res)=>{
        res.end("<h1><center>Hi I am Riyaan</center</h1>")
    });
    httpServer.listen(port,(req,res)=>{
        console.log(`Server Listening At Port Number ${port}`)
    })
    console.log("Hello")
}
main()