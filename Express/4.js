import http from "http" //in built module from nodejs
import url from "url"
const port=8008 //port number
import fs from "fs/promises"
async function main(){
    let httpServer=http.createServer(async(req,res)=>{

        const trimmedPath=url.parse(req.url)
        let path=trimmedPath.pathname

        let removeSlash=path.substring(1)
        console.log(removeSlash)

        if(removeSlash==""){
            res.end(await fs.readFile("./views/intro.html","utf-8"))
        }else if(removeSlash=="youtube"){
            res.end(await fs.readFile("./views/youtube.html","utf-8"))
        }else if(removeSlash=="google"){
            res.end(await fs.readFile("./views/google.html","utf-8"))
        }else if(removeSlash=="facebook"){
            res.end(await fs.readFile("./views/facebook.html","utf-8"))
        }else if(removeSlash!==""||removeSlash!=="youtube"||removeSlash!=="google"||removeSlash!=="facebook"){
            res.end(await fs.readFile("./views/notFound.html","utf-8"))
        }
    });
    httpServer.listen(port,(req,res)=>{
        console.log(`Server Listening At Port Number ${port}`)
    })
}
main()