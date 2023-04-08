import http from "http"
import env from "dotenv"
import getReq from "./methods/get-request.js"
import postReq from "./methods/post-request.js"
import putReq from "./methods/put-request.js"
import deleteReq from "./methods/delete-request.js"
import movies from "./data/movies.json" assert {type:"json"}
import fs from "fs"
env.config()
const PORT=process.env.PORT||8002

const server=http.createServer((req,res)=>{
    req.movies=movies;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode=404
            res.setHeader("Content-Type","application/json")
            res.write(JSON.stringify({title:"Not Found" ,message:"Route not found"}))
            res.end()
    }
})

server.listen(PORT,(req,res)=>{
    console.log(`Server listening at port number ${PORT}`)
})