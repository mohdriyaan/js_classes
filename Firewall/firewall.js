import http from "http"

const port = 8007 // use sudo access 
let counter = 1
async function main(){
    let httpServer = http.createServer((req,res)=>{
        
        console.log(counter)

        if(counter==5){
            res.end("You are blocked . ")
        }
        res.end("<h1>OU RESULTS WEBSITE</h1>")
        counter++
    })

    httpServer.listen(port,(req,res)=>{
        console.log(`Server listening at port number ${port}`)
    })
}
main()

// Browsers accept requests 2 times . 